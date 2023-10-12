import { Browser } from "puppeteer";
import puppeteer from "puppeteer-extra";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer
	.use(AdblockerPlugin())
	.use(StealthPlugin());

export const initializeBrowser = async () => {
	const browser: Browser = await puppeteer.launch({
		headless: false,
		devtools: true,
		slowMo: 50,
		defaultViewport: null,
		args: [
			"--disable-notifications",
			"--window-size=1366,768"
		]
	});

	const [page] = await browser.pages();

	console.log(`⏳ Initializing new browser...\n`);

	return page;
};