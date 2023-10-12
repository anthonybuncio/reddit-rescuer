import * as dotenv from 'dotenv';
import { redditLogin } from "./login";
import { redditUserMedia } from './save';
import userCredentialsInput from './userInput';

dotenv.config();

const checkCredentials = async () => {
	let USERNAME = process.env.REDDIT_USER;
	let PASSWORD = process.env.REDDIT_PASSWORD;
	if (!USERNAME || !PASSWORD) {
		console.log(`.env credentials not found..using fallback login\n`);
		const { usernameInput, passwordInput } = await userCredentialsInput();
		console.log(`Thank you, ${usernameInput}!`);
		return { USERNAME: usernameInput, PASSWORD: passwordInput };
	}
	console.log(`User credentials found via .env\n\nUsername: ${USERNAME}`);
	return { USERNAME, PASSWORD };

};

(async () => {
	const { USERNAME, PASSWORD } = await checkCredentials();

	try {
		const { page } = await redditLogin(USERNAME, PASSWORD);

		const data = await redditUserMedia(page, USERNAME);

		console.log(data);

	} catch (e) {
		console.log(e);
	}

	finally {

	}
})();