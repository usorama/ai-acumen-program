import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function analyzePresentation() {
  const browser = await chromium.launch({ headless: false }); // Use headless: false to see what's happening
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();
  
  const baseUrl = 'http://localhost:8147/complete-ai-acumen-presentation.html';
  const analysisResults = [];
  
  // Create screenshots directory
  const screenshotsDir = './presentation-screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }
  
  console.log('🎯 Starting presentation analysis...');
  
  try {
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // Get all slide navigation items to understand the structure
    const slideNavItems = await page.$$eval('.session-item[data-slide]', items => 
      items.map(item => ({
        dataSlide: item.getAttribute('data-slide'),
        text: item.textContent.trim()
      }))
    );
    
    console.log(`Found ${slideNavItems.length} slides:`, slideNavItems.map(item => item.dataSlide));
    
    // Analyze each slide by clicking on navigation items
    for (const navItem of slideNavItems.slice(0, 9)) { // Limit to first 9 slides
      console.log(`📸 Analyzing ${navItem.dataSlide}: ${navItem.text}...`);
      
      try {
        // Click on the navigation item to show the slide
        await page.click(`[data-slide="${navItem.dataSlide}"]`);
        await page.waitForTimeout(1000); // Wait for slide transition
        
        // Take full page screenshot
        const screenshotPath = path.join(screenshotsDir, `${navItem.dataSlide}-full.png`);
        await page.screenshot({ 
          path: screenshotPath,
          fullPage: false // Take viewport screenshot
        });
        
        // Get slide container element
        const slideSelector = `#${navItem.dataSlide}`;
        const slideElement = await page.$(slideSelector);
        
        if (!slideElement) {
          console.log(`⚠️  Could not find slide element: ${slideSelector}`);
          continue;
        }
        
        // Get detailed analysis of the slide
        const slideAnalysis = await page.evaluate((selector) => {
          const slide = document.querySelector(selector);
          if (!slide) return null;
          
          const rect = slide.getBoundingClientRect();
          const styles = window.getComputedStyle(slide);
          
          // Analyze text elements
          const textElements = slide.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span');
          const textAnalysis = Array.from(textElements).slice(0, 10).map(el => {
            const elStyles = window.getComputedStyle(el);
            const elRect = el.getBoundingClientRect();
            return {
              tag: el.tagName.toLowerCase(),
              fontSize: elStyles.fontSize,
              lineHeight: elStyles.lineHeight,
              color: elStyles.color,
              width: elRect.width,
              height: elRect.height,
              text: el.textContent.trim().substring(0, 100)
            };
          });
          
          // Check for content overflow
          const hasVerticalScroll = slide.scrollHeight > slide.clientHeight;
          const hasHorizontalScroll = slide.scrollWidth > slide.clientWidth;
          
          // Check viewport fit
          const viewport = { width: window.innerWidth, height: window.innerHeight };
          const viewportFit = {
            width: rect.width <= viewport.width,
            height: rect.height <= viewport.height,
            overflowX: Math.max(0, rect.width - viewport.width),
            overflowY: Math.max(0, rect.height - viewport.height)
          };
          
          return {
            dimensions: {
              width: rect.width,
              height: rect.height,
              top: rect.top,
              left: rect.left
            },
            styling: {
              backgroundColor: styles.backgroundColor,
              padding: styles.padding,
              margin: styles.margin
            },
            content: {
              textElements: textAnalysis.length,
              hasOverflow: hasVerticalScroll || hasHorizontalScroll,
              verticalScroll: hasVerticalScroll,
              horizontalScroll: hasHorizontalScroll
            },
            viewport: viewportFit,
            textAnalysis
          };
        }, slideSelector);
        
        // Analyze specific issues
        const issues = [];
        const recommendations = [];
        
        if (slideAnalysis) {
          // Check text readability
          slideAnalysis.textAnalysis.forEach(text => {
            const fontSize = parseFloat(text.fontSize);
            if (text.tag.match(/^h[1-6]$/) && fontSize < 18) {
              issues.push(`${text.tag.toUpperCase()} font too small: ${fontSize}px (recommend 18px+)`);
            } else if (!text.tag.match(/^h[1-6]$/) && fontSize < 14) {
              issues.push(`Body text too small: ${fontSize}px (recommend 14px+)`);
            }
            
            // Check line length (approximate)
            const avgCharWidth = fontSize * 0.6;
            const charsPerLine = text.width / avgCharWidth;
            if (charsPerLine > 80) {
              issues.push(`Line too long: ~${Math.round(charsPerLine)} chars (max 75 recommended)`);
            }
          });
          
          // Check viewport fit
          if (!slideAnalysis.viewport.width || !slideAnalysis.viewport.height) {
            issues.push(`Content exceeds viewport: ${slideAnalysis.viewport.overflowX}px width, ${slideAnalysis.viewport.overflowY}px height overflow`);
            recommendations.push('Optimize layout to fit within 1920x1080 viewport');
          }
          
          // Check content overflow
          if (slideAnalysis.content.hasOverflow) {
            issues.push('Content requires scrolling within slide');
            recommendations.push('Reduce content density or adjust layout');
          }
          
          // Check content density
          if (slideAnalysis.content.textElements > 15) {
            issues.push(`High content density: ${slideAnalysis.content.textElements} text elements`);
            recommendations.push('Consider breaking content into multiple slides');
          }
        }
        
        const result = {
          slide: navItem.dataSlide,
          title: navItem.text,
          screenshot: screenshotPath,
          analysis: slideAnalysis,
          issues,
          recommendations,
          timestamp: new Date().toISOString()
        };
        
        analysisResults.push(result);
        console.log(`✅ Completed analysis for ${navItem.dataSlide} (${issues.length} issues found)`);
        
      } catch (error) {
        console.error(`❌ Error analyzing ${navItem.dataSlide}:`, error.message);
        analysisResults.push({
          slide: navItem.dataSlide,
          title: navItem.text,
          error: error.message
        });
      }
    }
    
    // Generate summary report
    const report = {
      timestamp: new Date().toISOString(),
      url: baseUrl,
      viewport: { width: 1920, height: 1080 },
      totalSlides: slideNavItems.length,
      analyzedSlides: analysisResults.filter(r => !r.error).length,
      errors: analysisResults.filter(r => r.error).length,
      summary: {
        totalIssues: analysisResults.reduce((sum, slide) => sum + (slide.issues?.length || 0), 0),
        commonIssues: {},
        recommendations: []
      },
      slides: analysisResults
    };
    
    // Analyze common issues
    const allIssues = analysisResults.flatMap(r => r.issues || []);
    allIssues.forEach(issue => {
      const category = issue.split(':')[0];
      report.summary.commonIssues[category] = (report.summary.commonIssues[category] || 0) + 1;
    });
    
    // Generate overall recommendations
    if (report.summary.commonIssues['Body text too small'] > 0) {
      report.summary.recommendations.push('Increase base font size to minimum 14px for better readability');
    }
    if (report.summary.commonIssues['Content exceeds viewport'] > 0) {
      report.summary.recommendations.push('Optimize layouts to fit within standard 1920x1080 business presentation viewport');
    }
    if (report.summary.commonIssues['High content density'] > 0) {
      report.summary.recommendations.push('Break dense content into multiple slides for better comprehension');
    }
    
    // Save report
    const reportPath = './presentation-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n🎉 Analysis complete!');
    console.log(`📊 Report saved to: ${reportPath}`);
    console.log(`📸 Screenshots saved to: ${screenshotsDir}/`);
    console.log(`🔍 Analyzed ${report.analyzedSlides}/${report.totalSlides} slides`);
    console.log(`⚠️  Total issues found: ${report.summary.totalIssues}`);
    
    if (Object.keys(report.summary.commonIssues).length > 0) {
      console.log('\n📋 Common Issues:');
      Object.entries(report.summary.commonIssues).forEach(([issue, count]) => {
        console.log(`   • ${issue}: ${count} occurrences`);
      });
    }
    
    if (report.summary.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.summary.recommendations.forEach(rec => {
        console.log(`   • ${rec}`);
      });
    }
    
    return report;
    
  } catch (error) {
    console.error('❌ Fatal error during analysis:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the analysis
analyzePresentation()
  .then(report => {
    console.log('\n📊 Final Summary:');
    console.log(`   Successfully analyzed: ${report.analyzedSlides} slides`);
    console.log(`   Total issues: ${report.summary.totalIssues}`);
    console.log(`   Screenshots captured: ${report.analyzedSlides}`);
  })
  .catch(error => {
    console.error('Analysis failed:', error);
    process.exit(1);
  });

export { analyzePresentation };