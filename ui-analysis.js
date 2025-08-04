import { chromium } from 'playwright';
import { promises as fs } from 'fs';
import path from 'path';

const presentationFiles = [
  'gamma-prompts/ai_training_presentation.html',
  'program-guide/ai_training_presentation.html', 
  'program-html-slides/ai_training_presentation.html',
  'enhanced-presentation/ai_training_presentation.html',
  'enhanced-presentation/presentation.html',
  'enhanced-presentation/professional-training.html'
];

async function analyzePresentation() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const analysis = {
    files: [],
    summary: {
      colorSchemes: [],
      layouts: [],
      contentDensity: [],
      interactionPatterns: [],
      issues: []
    }
  };

  for (const filePath of presentationFiles) {
    const fullPath = path.resolve(filePath);
    
    // Check if file exists
    try {
      await fs.access(fullPath);
    } catch (error) {
      console.log(`File not found: ${filePath}`);
      continue;
    }

    const page = await context.newPage();
    
    try {
      console.log(`Analyzing: ${filePath}`);
      
      // Navigate to file
      await page.goto(`file://${fullPath}`);
      
      // Wait for content to load
      await page.waitForTimeout(2000);
      
      // Take screenshot
      const screenshotPath = `analysis-${filePath.replace(/[/\\]/g, '-').replace('.html', '')}.png`;
      await page.screenshot({ 
        path: screenshotPath, 
        fullPage: true 
      });
      
      // Analyze the page
      const pageAnalysis = await page.evaluate(() => {
        const styles = window.getComputedStyle(document.body);
        const elements = document.querySelectorAll('*');
        
        // Extract color scheme
        const colors = new Set();
        const backgrounds = new Set();
        
        elements.forEach(el => {
          const computedStyle = window.getComputedStyle(el);
          if (computedStyle.color !== 'rgba(0, 0, 0, 0)') {
            colors.add(computedStyle.color);
          }
          if (computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
            backgrounds.add(computedStyle.backgroundColor);
          }
        });
        
        // Analyze layout structure
        const hasGrid = Array.from(elements).some(el => 
          window.getComputedStyle(el).display === 'grid'
        );
        const hasFlex = Array.from(elements).some(el => 
          window.getComputedStyle(el).display === 'flex'
        );
        
        // Content density analysis
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, div');
        const totalText = Array.from(textElements)
          .map(el => el.textContent.trim())
          .filter(text => text.length > 0)
          .join(' ');
        
        // Navigation patterns
        const navElements = document.querySelectorAll('nav, .nav, [class*="nav"], a[href]');
        const interactiveElements = document.querySelectorAll('button, input, select, [onclick], [class*="click"]');
        
        // Font analysis
        const fontFamilies = new Set();
        const fontSizes = new Set();
        elements.forEach(el => {
          const style = window.getComputedStyle(el);
          if (style.fontFamily !== 'initial') {
            fontFamilies.add(style.fontFamily);
          }
          if (style.fontSize !== 'initial') {
            fontSizes.add(style.fontSize);
          }
        });
        
        return {
          title: document.title,
          bodyBackground: styles.backgroundColor,
          bodyColor: styles.color,
          fontFamily: styles.fontFamily,
          hasGrid,
          hasFlex,
          colorCount: colors.size,
          backgroundCount: backgrounds.size,
          colors: Array.from(colors).slice(0, 10), // Top 10 colors
          backgrounds: Array.from(backgrounds).slice(0, 10),
          textLength: totalText.length,
          wordCount: totalText.split(' ').length,
          navElementsCount: navElements.length,
          interactiveElementsCount: interactiveElements.length,
          fontFamilies: Array.from(fontFamilies),
          fontSizes: Array.from(fontSizes).slice(0, 10),
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          scrollHeight: document.body.scrollHeight,
          hasFixedElements: Array.from(elements).some(el => 
            window.getComputedStyle(el).position === 'fixed'
          ),
          headingCount: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length,
          paragraphCount: document.querySelectorAll('p').length,
          listItemCount: document.querySelectorAll('li').length,
          imageCount: document.querySelectorAll('img').length,
          linkCount: document.querySelectorAll('a').length
        };
      });
      
      analysis.files.push({
        path: filePath,
        screenshot: screenshotPath,
        ...pageAnalysis
      });
      
      console.log(`✓ Analyzed: ${filePath}`);
      
    } catch (error) {
      console.error(`Error analyzing ${filePath}:`, error.message);
      analysis.files.push({
        path: filePath,
        error: error.message
      });
    }
    
    await page.close();
  }
  
  // Generate summary analysis
  const validFiles = analysis.files.filter(f => !f.error);
  
  if (validFiles.length > 0) {
    // Color scheme analysis
    const allColors = validFiles.flatMap(f => f.colors || []);
    const allBackgrounds = validFiles.flatMap(f => f.backgrounds || []);
    analysis.summary.colorSchemes = [...new Set(allColors)];
    
    // Layout patterns
    const layoutTypes = validFiles.map(f => ({
      file: f.path,
      hasGrid: f.hasGrid,
      hasFlex: f.hasFlex,
      hasFixed: f.hasFixedElements
    }));
    analysis.summary.layouts = layoutTypes;
    
    // Content density
    const contentDensity = validFiles.map(f => ({
      file: f.path,
      wordsPerPage: f.wordCount,
      scrollHeight: f.scrollHeight,
      density: f.wordCount / Math.max(f.scrollHeight / 1000, 1) // words per 1000px
    }));
    analysis.summary.contentDensity = contentDensity;
    
    // Interaction patterns
    const interactions = validFiles.map(f => ({
      file: f.path,
      navigation: f.navElementsCount,
      interactive: f.interactiveElementsCount,
      links: f.linkCount
    }));
    analysis.summary.interactionPatterns = interactions;
    
    // Identify potential issues
    const issues = [];
    
    validFiles.forEach(f => {
      if (f.wordCount > 2000) {
        issues.push(`${f.path}: High content density (${f.wordCount} words) - may overwhelm users`);
      }
      if (f.fontSizes && f.fontSizes.length > 8) {
        issues.push(`${f.path}: Too many font sizes (${f.fontSizes.length}) - inconsistent typography`);
      }
      if (f.colorCount > 15) {
        issues.push(`${f.path}: Too many colors (${f.colorCount}) - may appear cluttered`);
      }
      if (f.interactiveElementsCount === 0) {
        issues.push(`${f.path}: No interactive elements - static experience`);
      }
      if (f.navElementsCount === 0) {
        issues.push(`${f.path}: No navigation elements - poor UX for longer content`);
      }
    });
    
    analysis.summary.issues = issues;
  }
  
  await browser.close();
  
  // Write analysis to file
  await fs.writeFile(
    'ui-analysis-report.json', 
    JSON.stringify(analysis, null, 2)
  );
  
  console.log('\n=== UI ANALYSIS COMPLETE ===');
  console.log(`Analyzed ${validFiles.length} presentation files`);
  console.log(`Screenshots saved with prefix "analysis-"`);
  console.log('Detailed report saved to: ui-analysis-report.json');
  
  return analysis;
}

// Run the analysis
analyzePresentation().catch(console.error);