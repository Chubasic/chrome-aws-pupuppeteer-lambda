// import * as puppeteer from "puppeteer-core";
// import * as chrome from 'chrome-aws-lambda/source/index.d';
const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

export default async function getScreenshot(url: string, type: any, qual?: any, fullPage?: any) {
    const browser = await puppeteer.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
    });

    const page = await browser.newPage();
    await page.goto(url);
    const file = await page.screenshot({ type });
    await browser.close();
    return file;
}