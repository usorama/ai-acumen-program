const { chromium } = require('playwright');
const path = require('path');

async function analyzePresentation() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport for consistent screenshots
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Load the presentation
  const filePath = path.join(__dirname, 'enhanced-presentation', 'presentation.html');
  await page.goto(`file://${filePath}`);
  
  // Wait for content to load
  await page.waitForTimeout(2000);
  
  // Take screenshot of the full page
  await page.screenshot({
    path: 'presentation-overview.png',
    fullPage: true
  });
  
  // Take screenshot of the first slide (title slide)
  await page.screenshot({
    path: 'slide-1-title.png'
  });
  
  // Navigate to slide 2 (objectives)
  await page.click('[data-slide="1"]');
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'slide-2-objectives.png'
  });
  
  // Navigate to slide 4 (three ecosystems)
  await page.click('[data-slide="3"]');
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'slide-4-ecosystems.png'
  });
  
  // Navigate to slide 8 (comparison matrix)
  await page.click('[data-slide="7"]');
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: 'slide-8-matrix.png'
  });
  
  // Take screenshot of sidebar navigation
  await page.screenshot({
    path: 'sidebar-navigation.png',
    clip: { x: 0, y: 0, width: 300, height: 1080 }
  });
  
  console.log('Screenshots captured successfully');
  
  await browser.close();
}

analyzePresentation().catch(console.error);