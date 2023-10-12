
const parseResults = async ({ page }) => {
	console.log(`⏳ Scraping webpage...`);
	const data = await page.evaluate(() => {
		const elements = Array.from(document.querySelectorAll('div#siteTable div.thing'));
		const postData = elements
			.filter(el => !el.getAttributeNode("class").value.includes('promoted'))
			.map((post: any, index) => {
				let type = (<HTMLInputElement | null>post)?.getAttribute('data-kind');
				const url = (<HTMLInputElement | null>post)?.getAttribute('data-url');
				let mediaString = '';
				if (type === "video") {
					const htmlString = (<HTMLInputElement | null>post.querySelector('div.expando'))?.getAttribute('data-cachedhtml');
					const doc = new DOMParser().parseFromString(htmlString, "text/html");
					const parseLink = new URL(doc.querySelector('div.video-player div div').getAttribute('data-hls-url'));
					mediaString = `${parseLink.origin}${parseLink.pathname}`;
				}
				if (/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/.test(url)) {
					type = "image";
					mediaString = url;
				}

				return {
					title: (<HTMLInputElement | null>post.querySelector('div.entry p.title a.title'))?.innerText.trim(),
					slug: (<HTMLInputElement | null>post)?.getAttribute('data-fullname'),
					url: url,
					type: type,
					media: mediaString,
					// format:
				};
			});
		return postData;
	});

	return data;
};

export const limitResults = async ({ page }) => {
	const resLimit = 25;
	let results = [];
	do {
		let newResults = await parseResults({ page });
		results = [...results, ...newResults];

		if (results.length < resLimit) {
			let nextPageButton = await page.$('span.next-button a');

			if (nextPageButton) {
				await nextPageButton.click();
				await page.waitForNavigation({ waitUntil: 'networkidle0' });
			} else {
				break;
			}
		}
	} while (results.length < resLimit);

	const maxResults = results.slice(0, resLimit);

	const typeCounter = maxResults.reduce((acc, current) => {
		if (!acc[current.type]) {
			acc[current.type] = 1;
		} else {
			acc[current.type]++;
		}
		return acc;
	}, {});

	console.log(`\n${JSON.stringify(typeCounter)}\ntotal length: ${maxResults.length}`);

	console.log(maxResults);
	return maxResults;
};

export default limitResults;