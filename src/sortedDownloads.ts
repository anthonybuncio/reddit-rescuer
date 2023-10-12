import ffmpeg from "fluent-ffmpeg";
import https from "https";
import pathname from "ffmpeg-static";
import fs from "fs";

ffmpeg.setFfmpegPath(pathname);

export const downloadVideo = (input, name, id) => {
	const targetDir = "./output/mp4";
	const fileName = `/${name}.mp4`;
	if (!fs.existsSync(targetDir)) {
		fs.mkdir(targetDir, error => error ? console.log(error) : console.log('You have created the target_directory'));
	}

	return new Promise<void>((resolve, reject) => {
		if (!input || !name) {
			reject(new Error("You must specify the input and the output file name"));
			return;
		}

		ffmpeg(input)
			.output(targetDir + fileName)
			.on("error", error => { reject(new Error(error)); })
			.on("end", () => {
				console.log(`Finished processing ${name}.mp4  [ID:${id}]`);
				resolve();
			})
			.run();
	});
};

export const downloadImage = async (input, name, id) => {
	const targetDir = "./output/images";
	const imageName = `/${name}.jpg`;
	const file = fs.createWriteStream(targetDir + imageName);

	if (!fs.existsSync(targetDir)) {
		fs.mkdir(targetDir, error => {
			error ? console.log(error) : console.log('You have created the target_directory');
		});
	}

	https
		.get(input, response => {
			response.pipe(file);

			file.on('finish', () => {
				file.close();
				console.log(`Image downloaded as ${name}.jpg`);
			});
		}).on('error', err => {
			console.error(`Error downloading image: ${err.message}`);
		});

};