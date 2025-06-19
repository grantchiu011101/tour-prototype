const { chromium, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const htmlFiles = [
  'profile.html',
  'downloads-empty.html',
  'audio-player-ended.html',
  'profile-settings.html',
  'creator-settings-language.html',
  'categories.html',
  'smart-downloads-preference.html',
  'signup.html',
  'city-detail.html',
  'creator-settings-theme.html',
  'audio-player-error.html',
  'splash-3.html',
  'audio-record.html',
  'settings.html',
  'tour-creation.html',
  'splash-2.html',
  'my-favorites.html',
  'creator-application-7-review-success.html',
  'admin-moderation.html',
  'audio-player-paused.html',
  'my-profile.html',
  'error-empty-states.html',
  'creator-notifications.html',
  'creator-dashboard.html',
  'search.html',
  'become-verified-creator.html',
  'paywall.html',
  'creator-application-5-review.html',
  'admin-content.html',
  'admin-reports.html',
  'audio-player.html',
  'admin-recent-activity.html',
  'museum-partner.html',
  'splash-4.html',
  'creator-application-6-success.html',
  'creator-application-2-profile.html',
  'admin-settings.html',
  'audio-player-loading.html',
  'admin-creators.html',
  'audio-player-favorited.html',
  'creator-recording-error.html',
  'creator-recording-paused.html',
  'creator-profile.html',
  'admin-maintenance.html',
  'settings-privacy.html',
  'audio-player-transcript.html',
  'audio-player-speed.html',
  'creator-recording-idle.html',
  'creator-earnings.html',
  'downloads.html',
  'creator-application-3-background.html',
  'settings-profile.html',
  'login.html',
  'verified-creator-onboarding.html',
  'settings-theme.html',
  'creator-application-4-sample.html',
  'audio-player-idle.html',
  'creator-submit.html',
  'creator-content.html',
  'tour-detail.html',
  'admin-dashboard.html',
  'audio-player-buffering.html',
  'creator-recording-recording.html',
  'notifications.html',
  'settings-location.html',
  'audio-player-offline.html',
  'creator-recording-saving.html',
  'splash-1.html',
  'attraction-detail.html',
  'creator-settings.html',
  'creator-recording-preview.html',
  'creator-reviews.html',
  'review-feedback.html',
  'audio-player-playing.html',
  'settings-support.html',
  'step-creation.html',
  'creator-submit-4.html',
  'prototype.html',
  'index.html',
  'settings-app.html',
  'admin-support.html',
  'admin-users.html',
  'audio-player-mini.html',
  'settings-language.html',
  'map.html',
  'settings-notifications.html',
  'audio-player-location.html',
  'home.html',
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    ...devices['iPhone 14'],
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  for (const file of htmlFiles) {
    const filePath = `file://${path.resolve(__dirname, file)}`;
    await page.goto(filePath);
    await page.waitForTimeout(500); // wait for any rendering
    const screenshotPath = path.join(__dirname, 'screenshots', `${path.basename(file, '.html')}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);
  }

  await browser.close();
})(); 