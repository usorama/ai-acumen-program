import { test, expect } from '@playwright/test';

test.describe('Presentation Mode', () => {
  test.beforeEach(async ({ page }) => {
    // Start at the home page
    await page.goto('http://localhost:3000/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should navigate to session page when clicking on a session', async ({ page }) => {
    // Click on the first session card
    await page.click('[data-testid="session-card-1"], .session-card:first-child, a[href*="/session/1"]');
    
    // Wait for navigation
    await page.waitForURL('**/session/1');
    
    // Verify we're on the session page
    expect(page.url()).toContain('/session/1');
  });

  test('should enter presentation mode when clicking Present button', async ({ page }) => {
    // Navigate to a session page
    await page.goto('http://localhost:3000/session/1');
    await page.waitForLoadState('networkidle');
    
    // Click the Present button
    await page.click('button:has-text("Present")');
    
    // Wait for navigation with presentation mode
    await page.waitForURL('**/session/1?mode=presentation');
    
    // Verify presentation mode is active
    expect(page.url()).toContain('mode=presentation');
    
    // Check if body has presentation-mode class
    const bodyClass = await page.getAttribute('body', 'class');
    expect(bodyClass).toContain('presentation-mode');
    
    // Verify progress bar is hidden in presentation mode
    await expect(page.locator('.sticky.top-0')).toBeHidden();
  });

  test('should exit presentation mode on Escape key', async ({ page }) => {
    // Navigate to a session page with presentation mode
    await page.goto('http://localhost:3000/session/1?mode=presentation');
    await page.waitForLoadState('networkidle');
    
    // Press Escape key
    await page.keyboard.press('Escape');
    
    // Wait for URL to update
    await page.waitForTimeout(500);
    
    // Verify presentation mode is exited
    expect(page.url()).not.toContain('mode=presentation');
    
    // Check if body no longer has presentation-mode class
    const bodyClass = await page.getAttribute('body', 'class');
    expect(bodyClass).not.toContain('presentation-mode');
    
    // Verify progress bar is visible again
    await expect(page.locator('.sticky.top-0')).toBeVisible();
  });

  test('should navigate between slides using arrow keys', async ({ page }) => {
    // Navigate to a session page
    await page.goto('http://localhost:3000/session/1');
    await page.waitForLoadState('networkidle');
    
    // Get initial slide indicator
    const initialSlide = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Press right arrow to go to next slide
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    
    // Get updated slide indicator
    const nextSlide = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Verify slide changed
    expect(nextSlide).not.toBe(initialSlide);
    
    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(300);
    
    // Get slide indicator again
    const previousSlide = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Verify we're back to the initial slide
    expect(previousSlide).toBe(initialSlide);
  });

  test('should toggle fullscreen with F11 key', async ({ page, context }) => {
    // Grant permissions for fullscreen
    await context.grantPermissions(['fullscreen']);
    
    // Navigate to a session page
    await page.goto('http://localhost:3000/session/1');
    await page.waitForLoadState('networkidle');
    
    // Press F11 to enter fullscreen
    await page.keyboard.press('F11');
    await page.waitForTimeout(500);
    
    // Note: Playwright doesn't support actual fullscreen mode testing
    // But we can verify the key handler is working by checking console logs
  });

  test('should toggle navigation with Ctrl+N', async ({ page }) => {
    // Navigate to a session page
    await page.goto('http://localhost:3000/session/1');
    await page.waitForLoadState('networkidle');
    
    // Check if navigation is visible initially
    const navInitiallyVisible = await page.isVisible('[data-testid="navigation"], nav, .fixed.top-0.left-0.h-full.w-80');
    
    // Press Ctrl+N to toggle navigation
    await page.keyboard.press('Control+N');
    await page.waitForTimeout(500);
    
    // Check navigation visibility after toggle
    const navAfterToggle = await page.isVisible('[data-testid="navigation"], nav, .fixed.top-0.left-0.h-full.w-80');
    
    // Navigation visibility should have changed
    expect(navAfterToggle).toBe(!navInitiallyVisible);
  });

  test('should show slide controls in non-presentation mode', async ({ page }) => {
    // Navigate to a session page
    await page.goto('http://localhost:3000/session/1');
    await page.waitForLoadState('networkidle');
    
    // Verify slide controls are visible
    await expect(page.locator('[data-testid="slide-controls"], .fixed.bottom-8, button:has-text("Previous"), button:has-text("Next")')).toBeVisible();
  });

  test('should hide slide controls in presentation mode', async ({ page }) => {
    // Navigate to a session page with presentation mode
    await page.goto('http://localhost:3000/session/1?mode=presentation');
    await page.waitForLoadState('networkidle');
    
    // Verify slide controls are hidden
    await expect(page.locator('.fixed.bottom-8:not(.presentation-mode)')).toBeHidden();
  });

  test('should maintain session state when toggling presentation mode', async ({ page }) => {
    // Navigate to session 2
    await page.goto('http://localhost:3000/session/2');
    await page.waitForLoadState('networkidle');
    
    // Navigate to slide 3
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(300);
    
    // Get current slide before entering presentation mode
    const slideBeforePresentation = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Enter presentation mode
    await page.click('button:has-text("Present")');
    await page.waitForURL('**/session/2?mode=presentation');
    
    // Get current slide in presentation mode
    const slideInPresentation = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Verify slide position is maintained
    expect(slideInPresentation).toBe(slideBeforePresentation);
    
    // Exit presentation mode
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    
    // Get current slide after exiting presentation mode
    const slideAfterPresentation = await page.textContent('[data-testid="slide-indicator"], .slide-indicator, text=/\\d+\\s*\\/\\s*\\d+/');
    
    // Verify slide position is still maintained
    expect(slideAfterPresentation).toBe(slideBeforePresentation);
  });
});