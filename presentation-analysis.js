import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function analyzePresentation() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, // Standard business presentation resolution
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
    
    // Wait for page to fully load
    await page.waitForTimeout(2000);
    
    // Define slides to analyze
    const slides = [
      { name: 'hero', selector: '#hero', description: 'Hero/Landing Section' },
      { name: 'instructor', selector: '#instructor', description: 'Instructor Introduction' },
      { name: 'timeline', selector: '#timeline', description: 'Program Timeline' },
      { name: 'session-1', selector: '#session-1', description: 'Session 1: AI Fundamentals' },
      { name: 'session-2', selector: '#session-2', description: 'Session 2: Machine Learning Basics' },
      { name: 'session-3', selector: '#session-3', description: 'Session 3: Neural Networks' },
      { name: 'session-4', selector: '#session-4', description: 'Session 4: Deep Learning' },
      { name: 'session-5', selector: '#session-5', description: 'Session 5: Natural Language Processing' },
      { name: 'session-6', selector: '#session-6', description: 'Session 6: Computer Vision' }
    ];
    
    for (const slide of slides) {
      console.log(`📸 Analyzing ${slide.description}...`);
      
      try {
        // Check if element exists
        const element = await page.$(slide.selector);
        if (!element) {
          console.log(`⚠️  Could not find element with selector: ${slide.selector}`);
          continue;
        }
        
        // Scroll to element
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        
        // Get element dimensions and position
        const boundingBox = await element.boundingBox();
        const elementInfo = await page.evaluate((selector) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          
          const rect = el.getBoundingClientRect();
          const styles = window.getComputedStyle(el);
          
          return {
            dimensions: {
              width: rect.width,
              height: rect.height,
              top: rect.top,
              left: rect.left
            },
            styling: {
              padding: styles.padding,
              margin: styles.margin,
              fontSize: styles.fontSize,
              lineHeight: styles.lineHeight,
              backgroundColor: styles.backgroundColor,
              color: styles.color
            },
            textContent: el.textContent ? el.textContent.substring(0, 200) + '...' : '',
            hasOverflow: el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth,
            childCount: el.children.length
          };
        }, slide.selector);
        
        // Check for readability issues
        const readabilityAnalysis = await page.evaluate((selector) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          
          const textElements = el.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, div');
          const issues = [];
          
          textElements.forEach((textEl, index) => {
            const styles = window.getComputedStyle(textEl);
            const fontSize = parseFloat(styles.fontSize);
            const lineHeight = parseFloat(styles.lineHeight);
            const color = styles.color;
            const bgColor = styles.backgroundColor;
            
            // Check font size (minimum 14px for body text, 18px for headings)
            if (textEl.tagName.match(/^H[1-6]$/) && fontSize < 18) {
              issues.push(`Heading too small: ${textEl.tagName} has ${fontSize}px (min 18px recommended)`);
            } else if (!textEl.tagName.match(/^H[1-6]$/) && fontSize < 14) {
              issues.push(`Body text too small: ${fontSize}px (min 14px recommended)`);
            }
            
            // Check line height (should be 1.4-1.6 for readability)
            const lineHeightRatio = lineHeight / fontSize;
            if (lineHeightRatio < 1.2) {
              issues.push(`Line height too tight: ${lineHeightRatio.toFixed(2)} (min 1.2 recommended)`);
            }
            
            // Check text length (max 65-75 characters per line)
            const textWidth = textEl.getBoundingClientRect().width;
            const avgCharWidth = fontSize * 0.5; // Approximate
            const charsPerLine = textWidth / avgCharWidth;
            if (charsPerLine > 80) {
              issues.push(`Line too long: ~${Math.round(charsPerLine)} chars (max 75 recommended)`);
            }
          });
          
          return {
            totalTextElements: textElements.length,
            issues: issues.slice(0, 10) // Limit to first 10 issues
          };
        }, slide.selector);
        
        // Check viewport fit
        const viewportAnalysis = await page.evaluate((selector) => {
          const el = document.querySelector(selector);
          if (!el) return null;
          
          const rect = el.getBoundingClientRect();
          const viewport = { width: window.innerWidth, height: window.innerHeight };
          
          return {
            fitsInViewport: {
              width: rect.width <= viewport.width,
              height: rect.height <= viewport.height,
              completely: rect.width <= viewport.width && rect.height <= viewport.height
            },
            overflowAmount: {
              width: Math.max(0, rect.width - viewport.width),
              height: Math.max(0, rect.height - viewport.height)
            },
            visiblePercentage: {
              width: Math.min(100, (viewport.width / rect.width) * 100),
              height: Math.min(100, (viewport.height / rect.height) * 100)
            }
          };
        }, slide.selector);
        
        // Take full element screenshot
        const screenshotPath = path.join(screenshotsDir, `${slide.name}-full.png`);
        await element.screenshot({ path: screenshotPath });
        
        // Take viewport screenshot showing how it appears to users
        const viewportScreenshotPath = path.join(screenshotsDir, `${slide.name}-viewport.png`);
        await page.screenshot({ 
          path: viewportScreenshotPath,
          clip: {
            x: 0,
            y: Math.max(0, boundingBox.y),
            width: 1920,
            height: Math.min(1080, boundingBox.height)
          }
        });
        
        // Compile analysis results
        const analysis = {
          slide: slide.name,
          description: slide.description,
          selector: slide.selector,
          screenshots: {
            full: screenshotPath,
            viewport: viewportScreenshotPath
          },
          dimensions: elementInfo?.dimensions,
          styling: elementInfo?.styling,
          readability: readabilityAnalysis,
          viewport: viewportAnalysis,
          issues: [],
          recommendations: []
        };
        
        // Generate specific issues and recommendations
        if (elementInfo?.hasOverflow) {
          analysis.issues.push('Content overflow detected - scrolling required');
          analysis.recommendations.push('Reduce content density or increase container size');
        }
        
        if (!viewportAnalysis?.fitsInViewport.completely) {
          analysis.issues.push(`Content exceeds viewport: ${Math.round(viewportAnalysis.overflowAmount.width)}px width, ${Math.round(viewportAnalysis.overflowAmount.height)}px height overflow`);
          analysis.recommendations.push('Optimize layout to fit within standard 1920x1080 viewport');
        }
        
        if (readabilityAnalysis?.issues.length > 0) {
          analysis.issues.push(...readabilityAnalysis.issues);
          analysis.recommendations.push('Improve typography for better readability');
        }
        
        if (elementInfo?.childCount > 20) {
          analysis.issues.push(`High content density: ${elementInfo.childCount} child elements`);
          analysis.recommendations.push('Consider breaking content into multiple slides or sections');
        }
        
        analysisResults.push(analysis);
        console.log(`✅ Completed analysis for ${slide.description}`);
        
      } catch (error) {
        console.error(`❌ Error analyzing ${slide.description}:`, error.message);
        analysisResults.push({
          slide: slide.name,
          description: slide.description,
          error: error.message
        });
      }
    }
    
    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      url: baseUrl,
      viewport: { width: 1920, height: 1080 },
      totalSlides: slides.length,
      analyzedSlides: analysisResults.filter(r => !r.error).length,
      errors: analysisResults.filter(r => r.error).length,
      overallIssues: [],
      slides: analysisResults
    };
    
    // Calculate overall issues
    const allIssues = analysisResults.flatMap(r => r.issues || []);
    const issueTypes = {};
    allIssues.forEach(issue => {
      const type = issue.split(':')[0];
      issueTypes[type] = (issueTypes[type] || 0) + 1;
    });
    
    report.overallIssues = Object.entries(issueTypes).map(([type, count]) => ({ type, count }));
    
    // Save report
    const reportPath = './presentation-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n🎉 Analysis complete!');
    console.log(`📊 Report saved to: ${reportPath}`);
    console.log(`📸 Screenshots saved to: ${screenshotsDir}/`);
    console.log(`🔍 Analyzed ${report.analyzedSlides}/${report.totalSlides} slides`);
    
    if (report.overallIssues.length > 0) {
      console.log('\n⚠️  Common Issues Found:');
      report.overallIssues.forEach(issue => {
        console.log(`   • ${issue.type}: ${issue.count} occurrences`);
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
    console.log('\n📋 Analysis Summary:');
    console.log(`   Total slides: ${report.totalSlides}`);
    console.log(`   Successfully analyzed: ${report.analyzedSlides}`);
    console.log(`   Errors: ${report.errors}`);
    console.log(`   Issues found: ${report.slides.reduce((sum, slide) => sum + (slide.issues?.length || 0), 0)}`);
  })
  .catch(error => {
    console.error('Analysis failed:', error);
    process.exit(1);
  });

export { analyzePresentation };