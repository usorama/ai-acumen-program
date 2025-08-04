import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function analyzePresentation() {
  const browser = await chromium.launch({ headless: true });
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
    
    // Open navigation first
    try {
      await page.click('.nav-toggle', { timeout: 5000 });
      await page.waitForTimeout(1000);
      console.log('📱 Navigation opened successfully');
    } catch (error) {
      console.log('⚠️  Could not open navigation, proceeding with visible slides...');
    }
    
    // Define slides to analyze directly
    const targetSlides = [
      'hero', 'instructor', 'timeline', 'session-1', 'session-2', 'session-3', 'session-4', 'session-5', 'session-6'
    ];
    
    for (const slideId of targetSlides) {
      console.log(`📸 Analyzing slide: ${slideId}...`);
      
      try {
        // Navigate using URL hash
        await page.evaluate((id) => {
          window.location.hash = id;
        }, slideId);
        
        await page.waitForTimeout(2000); // Wait for slide transition
        
        // Check if slide exists and is visible
        const slideElement = await page.$(`#${slideId}`);
        if (!slideElement) {
          console.log(`⚠️  Slide ${slideId} not found, skipping...`);
          continue;
        }
        
        // Take full page screenshot
        const screenshotPath = path.join(screenshotsDir, `${slideId}.png`);
        await page.screenshot({ 
          path: screenshotPath,
          fullPage: false
        });
        
        // Analyze the slide content
        const analysis = await page.evaluate((selector) => {
          const slide = document.querySelector(selector);
          if (!slide) return null;
          
          const rect = slide.getBoundingClientRect();
          const viewport = { width: window.innerWidth, height: window.innerHeight };
          
          // Get all text elements
          const textElements = slide.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, div');
          const textAnalysis = [];
          
          textElements.forEach((el, index) => {
            if (index > 20) return; // Limit analysis to first 20 elements
            
            const text = el.textContent.trim();
            if (text.length === 0) return;
            
            const styles = window.getComputedStyle(el);
            const elRect = el.getBoundingClientRect();
            
            textAnalysis.push({
              tag: el.tagName.toLowerCase(),
              text: text.substring(0, 100),
              fontSize: parseFloat(styles.fontSize),
              lineHeight: styles.lineHeight,
              color: styles.color,
              fontWeight: styles.fontWeight,
              width: elRect.width,
              height: elRect.height,
              visible: elRect.width > 0 && elRect.height > 0
            });
          });
          
          // Check layout and spacing
          const hasOverflow = slide.scrollHeight > slide.clientHeight || slide.scrollWidth > slide.clientWidth;
          const fitsViewport = rect.width <= viewport.width && rect.height <= viewport.height;
          
          // Count content density
          const headings = slide.querySelectorAll('h1, h2, h3, h4, h5, h6').length;
          const paragraphs = slide.querySelectorAll('p').length;
          const lists = slide.querySelectorAll('ul, ol').length;
          const images = slide.querySelectorAll('img').length;
          
          return {
            dimensions: {
              width: rect.width,
              height: rect.height,
              viewportFit: fitsViewport,
              overflowX: Math.max(0, rect.width - viewport.width),
              overflowY: Math.max(0, rect.height - viewport.height)
            },
            content: {
              headings,
              paragraphs,
              lists,
              images,
              textElements: textAnalysis.length,
              hasOverflow,
              totalElements: slide.querySelectorAll('*').length
            },
            textAnalysis,
            background: window.getComputedStyle(slide).backgroundColor
          };
        }, `#${slideId}`);
        
        if (!analysis) {
          console.log(`⚠️  Could not analyze slide ${slideId}`);
          continue;
        }
        
        // Evaluate issues and recommendations
        const issues = [];
        const recommendations = [];
        
        // Check text readability
        analysis.textAnalysis.forEach(text => {
          if (text.tag.match(/^h[1-6]$/)) {
            if (text.fontSize < 18) {
              issues.push(`Heading (${text.tag}) too small: ${text.fontSize}px (minimum 18px recommended)`);
            }
          } else {
            if (text.fontSize < 14) {
              issues.push(`Body text too small: ${text.fontSize}px (minimum 14px recommended)`);
            }
          }
          
          // Check line length approximation
          const avgCharWidth = text.fontSize * 0.6;
          const estimatedCharsPerLine = text.width / avgCharWidth;
          if (estimatedCharsPerLine > 80) {
            issues.push(`Text line too long: ~${Math.round(estimatedCharsPerLine)} characters (max 75 recommended)`);
          }
        });
        
        // Check viewport fit
        if (!analysis.dimensions.viewportFit) {
          issues.push(`Content exceeds viewport by ${analysis.dimensions.overflowX}px width, ${analysis.dimensions.overflowY}px height`);
          recommendations.push('Optimize layout to fit within 1920x1080 viewport');
        }
        
        // Check content overflow
        if (analysis.content.hasOverflow) {
          issues.push('Content requires scrolling within slide container');
          recommendations.push('Reduce content density or adjust layout spacing');
        }
        
        // Check content density
        const contentDensity = analysis.content.headings + analysis.content.paragraphs + analysis.content.lists;
        if (contentDensity > 10) {
          issues.push(`High content density: ${contentDensity} major content blocks`);
          recommendations.push('Consider splitting content across multiple slides');
        }
        
        // Check for proper heading hierarchy
        const headingTags = analysis.textAnalysis
          .filter(el => el.tag.match(/^h[1-6]$/))
          .map(el => parseInt(el.tag.charAt(1)));
        
        if (headingTags.length > 1) {
          const hasProperHierarchy = headingTags.every((level, index) => {
            if (index === 0) return true;
            return level <= headingTags[index - 1] + 1;
          });
          
          if (!hasProperHierarchy) {
            issues.push('Improper heading hierarchy detected');
            recommendations.push('Use proper heading hierarchy (h1 > h2 > h3, etc.)');
          }
        }
        
        // Professional appearance checks
        if (analysis.content.textElements > 25) {
          issues.push(`Very high text element count: ${analysis.content.textElements}`);
          recommendations.push('Simplify content for better professional presentation');
        }
        
        // Store results
        const result = {
          slideId,
          screenshot: screenshotPath,
          analysis,
          issues,
          recommendations,
          scores: {
            readability: Math.max(0, 10 - issues.filter(i => i.includes('too small')).length),
            viewportFit: analysis.dimensions.viewportFit ? 10 : 5,
            contentDensity: Math.max(0, 10 - Math.floor(contentDensity / 2)),
            professional: Math.max(0, 10 - Math.floor(issues.length / 2))
          }
        };
        
        analysisResults.push(result);
        console.log(`✅ Analyzed ${slideId}: ${issues.length} issues, ${recommendations.length} recommendations`);
        
      } catch (error) {
        console.error(`❌ Error analyzing ${slideId}:`, error.message);
        analysisResults.push({
          slideId,
          error: error.message
        });
      }
    }
    
    // Generate comprehensive report
    const successfulAnalyses = analysisResults.filter(r => !r.error);
    const avgScores = successfulAnalyses.length > 0 ? {
      readability: successfulAnalyses.reduce((sum, r) => sum + r.scores.readability, 0) / successfulAnalyses.length,
      viewportFit: successfulAnalyses.reduce((sum, r) => sum + r.scores.viewportFit, 0) / successfulAnalyses.length,
      contentDensity: successfulAnalyses.reduce((sum, r) => sum + r.scores.contentDensity, 0) / successfulAnalyses.length,
      professional: successfulAnalyses.reduce((sum, r) => sum + r.scores.professional, 0) / successfulAnalyses.length
    } : {};
    
    const report = {
      timestamp: new Date().toISOString(),
      url: baseUrl,
      viewport: { width: 1920, height: 1080 },
      summary: {
        totalSlides: targetSlides.length,
        analyzedSlides: successfulAnalyses.length,
        errors: analysisResults.filter(r => r.error).length,
        totalIssues: successfulAnalyses.reduce((sum, r) => sum + r.issues.length, 0),
        averageScores: avgScores,
        overallScore: Object.values(avgScores).reduce((sum, score) => sum + score, 0) / 4
      },
      commonIssues: {},
      slides: analysisResults
    };
    
    // Analyze common issues
    successfulAnalyses.forEach(slide => {
      slide.issues.forEach(issue => {
        const category = issue.split(':')[0];
        report.commonIssues[category] = (report.commonIssues[category] || 0) + 1;
      });
    });
    
    // Save detailed report
    const reportPath = './presentation-analysis-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Create human-readable summary
    const summaryPath = './presentation-analysis-summary.md';
    const summaryContent = generateSummaryMarkdown(report);
    fs.writeFileSync(summaryPath, summaryContent);
    
    console.log('\n🎉 Analysis Complete!');
    console.log(`📊 Overall Score: ${report.summary.overallScore.toFixed(1)}/10`);
    console.log(`📸 Screenshots: ${screenshotsDir}/`);
    console.log(`📋 Report: ${reportPath}`);
    console.log(`📝 Summary: ${summaryPath}`);
    
    return report;
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

function generateSummaryMarkdown(report) {
  const { summary, commonIssues, slides } = report;
  
  return `# Presentation Analysis Summary

## Overall Assessment
- **Overall Score**: ${summary.overallScore.toFixed(1)}/10
- **Slides Analyzed**: ${summary.analyzedSlides}/${summary.totalSlides}
- **Total Issues Found**: ${summary.totalIssues}

## Category Scores
- **Readability**: ${summary.averageScores.readability?.toFixed(1)}/10
- **Viewport Fit**: ${summary.averageScores.viewportFit?.toFixed(1)}/10
- **Content Density**: ${summary.averageScores.contentDensity?.toFixed(1)}/10
- **Professional Appearance**: ${summary.averageScores.professional?.toFixed(1)}/10

## Common Issues
${Object.entries(commonIssues).map(([issue, count]) => `- ${issue}: ${count} occurrences`).join('\n')}

## Slide-by-Slide Analysis

${slides.filter(s => !s.error).map(slide => `
### ${slide.slideId.toUpperCase()}
- **Issues**: ${slide.issues.length}
- **Screenshot**: ${slide.screenshot}
- **Content**: ${slide.analysis.content.headings} headings, ${slide.analysis.content.paragraphs} paragraphs
- **Viewport Fit**: ${slide.analysis.dimensions.viewportFit ? '✅ Yes' : '❌ No'}
- **Key Issues**: ${slide.issues.slice(0, 3).join('; ') || 'None'}
- **Recommendations**: ${slide.recommendations.slice(0, 2).join('; ') || 'None'}
`).join('\n')}

## Key Recommendations
1. **Text Readability**: Ensure minimum 14px body text and 18px headings
2. **Viewport Optimization**: Design for 1920x1080 business presentation displays
3. **Content Density**: Limit to 8-10 major content blocks per slide
4. **Professional Spacing**: Use consistent margins and padding for clean appearance
5. **Hierarchy**: Maintain proper heading structure (h1 > h2 > h3)

Generated on: ${new Date().toLocaleString()}
`;
}

// Run the analysis
analyzePresentation()
  .then(report => {
    console.log(`\n📊 Final Results:`);
    console.log(`   Overall Score: ${report.summary.overallScore.toFixed(1)}/10`);
    console.log(`   Readability: ${report.summary.averageScores.readability?.toFixed(1)}/10`);
    console.log(`   Viewport Fit: ${report.summary.averageScores.viewportFit?.toFixed(1)}/10`);
    console.log(`   Content Density: ${report.summary.averageScores.contentDensity?.toFixed(1)}/10`);
    console.log(`   Professional: ${report.summary.averageScores.professional?.toFixed(1)}/10`);
  })
  .catch(error => {
    console.error('Analysis failed:', error);
    process.exit(1);
  });

export { analyzePresentation };