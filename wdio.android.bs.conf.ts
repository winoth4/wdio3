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
    './test/specs/ApiDemoTest.ts'
];
config.services= ['browserstack'],
config.capabilities= [{
    "platformName": "Android",
    "appium:deviceName": "Google Pixel 5",
    "appium:app": "bs://a3eb0fc508c5872a58a3b13f28dcbfa69fd8a8c8",
    "appium:automationName": "uiautomator2"

}]
exports.config = config;