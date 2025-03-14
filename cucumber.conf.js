const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const fs = require('fs');
setDefaultTimeout(60000);
BeforeAll(async function() {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        browserContextOptions: {
            viewport: null,
        },
    });
    const context = await browser.newContext();
    page = await context.newPage();
});

AfterAll(async function() {
    await global.browser.close();
});

After(async function(testCase) {
    const screenshotPath = `screenshots/${Date.now()}_${testCase.result.status}.png`;
    await global.page.screenshot({path: screenshotPath});
});