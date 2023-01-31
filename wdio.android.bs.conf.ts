import type { Options } from '@wdio/types'
import { config } from './wdio.conf';

config.user="vinothcts_BDWU69",
config.key="5pEKiQ5ezEAzhyyVz9nU",
// ============
// Specs
// ============
config.specs = [
    './e2e/src/integration/sauce_login/sauce.login.smoke.spec.ts'
];
config.services= ['browserstack'],
config.capabilities= [{
    "platformName": "Android",
    "appium:deviceName": "Google Pixel 5",
    "appium:app": "bs://471c8108c037234009c47ef79b7f8d915439f368",
    "appium:automationName": "uiautomator2"

}]
exports.config = config;