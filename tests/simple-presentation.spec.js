import { test, expect } from '@playwright/test';

test.describe('Core Presentation Features', () => {
  test('Present button should work correctly', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Click on first session
    await page.click('a[href="/session/1"]');
    await page.waitForURL('**/session/1');
    
    // Verify we're on session page
    const title = await page.textContent('h1');
    expect(title).toContain('Session 01');
    
    // Click Present button
    await page.click('button:has-text("Present")');
    
    // Wait for URL to update
    await page.waitForURL('**/session/1?mode=presentation');
    
    // Verify presentation mode
    expect(page.url()).toContain('mode=presentation');
    const bodyClass = await page.getAttribute('body', 'class');
    expect(bodyClass).toContain('presentation-mode');
    
    // Press Escape to exit
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    
    // Verify exit from presentation mode
    expect(page.url()).not.toContain('mode=presentation');
    const bodyClassAfter = await page.getAttribute('body', 'class');
    expect(bodyClassAfter || '').not.toContain('presentation-mode');
  });
  
  test('Navigation works in presentation mode', async ({ page }) => {
    // Go directly to presentation mode
    await page.goto('/session/1?mode=presentation');
    await page.waitForLoadState('networkidle');
    
    // Verify in presentation mode
    const bodyClass = await page.getAttribute('body', 'class');
    expect(bodyClass).toContain('presentation-mode');
    
    // Navigate with arrow keys
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    
    // Try going back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(300);
    
    // Exit with Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    
    // Should be out of presentation mode
    const bodyClassAfter = await page.getAttribute('body', 'class');
    expect(bodyClassAfter || '').not.toContain('presentation-mode');
  });
});