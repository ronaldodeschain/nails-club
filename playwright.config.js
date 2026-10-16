const { defineConfig, devices } = require("@playwright/test");

const isCI = Boolean(process.env.CI);

module.exports = defineConfig({
    testDir: "./tests/e2e",
    fullyParallel: true,
    forbidOnly: isCI,
    retries: isCI ? 1 : 0,
    reporter: [
        ["list"],
        ["html", { outputFolder: "playwright-report", open: "never" }],
    ],
    outputDir: "test-results",
    timeout: 30_000,
    expect: { timeout: 5_000 },
    use: {
        baseURL: "http://127.0.0.1:4173",
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        { name: "chromium", use: { browserName: "chromium" } },
        { name: "firefox", use: { browserName: "firefox" } },
        { name: "webkit", use: { browserName: "webkit" } },
        {
            name: "mobile-chromium-pixel-7-emulated",
            use: { ...devices["Pixel 7"], browserName: "chromium" },
        },
        {
            name: "mobile-webkit-iphone-13-emulated",
            use: { ...devices["iPhone 13"], browserName: "webkit" },
        },
    ],
    webServer: {
        command: "npx http-server ./prototipo -a 127.0.0.1 -p 4173 -c-1",
        url: "http://127.0.0.1:4173",
        reuseExistingServer: !isCI,
        timeout: 30_000,
    },
});