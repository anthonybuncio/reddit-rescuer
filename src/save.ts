
import { downloadImage, downloadVideo } from "./sortedDownloads";
import limitResults from "./filterResults";

export const redditUserMedia = async (page, USERNAME) => {

	await page.goto(`https://old.reddit.com/user/${USERNAME}/saved/`, { waitUntil: 'networkidle0' });
	const newResults = await limitResults({ page });

	downloadResults(newResults);

	return newResults;
};

const downloadResults = (mediaList) => {
	mediaList.map(async (e, i) => {
		if (e.type === "image") await downloadImage(e.media, e.slug, i);
		if (e.type === "video") await downloadVideo(e.media, e.slug, i);
	});
};