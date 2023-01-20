
exports.config = {
    specs: [
        './test/specs/ApiDemoTest.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    capabilities:[{
        "platformName": "Android",
        "appium:deviceName": "Google Pixel 5",
        "appium:app": "bs://a3eb0fc508c5872a58a3b13f28dcbfa69fd8a8c8",
        "appium:automationName": "uiautomator2"
    }],

    services: ['browserstack'],
    user:  "vinothcts_BDWU69",
    key:  "5pEKiQ5ezEAzhyyVz9nU",

    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec'],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


};
