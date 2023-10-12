import { createInterface } from "readline";

const readline = createInterface({
	input: process.stdin,
	output: process.stdout
});

const readLineAsync = msg => {
	return new Promise(resolve => {
		readline.question(msg, userRes => {
			resolve(userRes);
		});
	});
};

const userCredentialsInput = async () => {
	const usernameInput = await readLineAsync("Enter Reddit username: ");
	const passwordInput = await readLineAsync("Enter Reddit password: ");
	readline.close();

	return { usernameInput, passwordInput };
};

export default userCredentialsInput;