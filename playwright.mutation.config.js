const base = require("./playwright.config");

module.exports = {
    ...base,
    testDir: "./tests/mutation",
    reporter: "list",
    projects: [{ name: "chromium-mutation", use: base.projects[0].use }],
};