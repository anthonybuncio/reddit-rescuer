import { initializeBrowser } from "./config";

const REDDIT_URL = `https://old.reddit.com/`;

export const redditLogin = async (USERNAME, PASSWORD) => {
	const page = await initializeBrowser();
	await page.goto(REDDIT_URL, { waitUntil: 'networkidle0' });

	await page.type('input[name="user"]', USERNAME, { delay: 30 });
	await page.type('input[name="passwd"]', PASSWORD, { delay: 30 });
	await page.click(`#login_login-main > div.submit > button`);
	await page.waitForSelector('form[action="https://old.reddit.com/logout"],div[class="status error"]');





	const error = await page.$('div[class="status error"]');

	if (error) {
		const error_message = await (await error.getProperty('innerText')).jsonValue();
		console.log(`${USERNAME} failed to login. \nError message: ${error_message}`);
		process.exit(1);
	} else {
		console.log(`${USERNAME} has successfully logged in.\n`);
		return { page };
	}
};
