import type { Options } from '@wdio/types'
import { config } from './wdio.conf';
import {join} from 'path';

const apkPath=join(process.cwd(),"./app/android/Notepad.apk")
config.user="vinothcts_BDWU69",
config.key="5pEKiQ5ezEAzhyyVz9nU",
// ============
// Specs
// ============
config.specs = [
    '../e2e/src/integration/sauce_login/sauce.login.smoke.spec.ts'
];
config.services= ['browserstack'],
config.capabilities= [{
    "platformName": "ios",
    "appium:deviceName": "iPhone 11",
    "appium:app": "bs://f5eedb5a855870ca02bfa47dd89da9644d7f25e8",
    "appium:automationName": "xcuitest"

}]
exports.config = config;