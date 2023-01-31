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
    './test/specs/ios/*.ts'
];
config.services= ['browserstack'],
config.capabilities= [{
    "platformName": "ios",
    "appium:deviceName": "iPhone 11",
    "appium:app": "bs://9da6378068e681535d106d591763a62a5029fd14",
    "appium:automationName": "xcuitest"

}]
exports.config = config;