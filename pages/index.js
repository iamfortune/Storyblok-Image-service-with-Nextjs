import { useEffect, useState } from "react";
import Image from "next/image";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

storyblokInit({
	accessToken: "5BtK7LI8vieGBr4TMQxDNwtt",
	use: [apiPlugin],
});

const privateAsset =
	"https://a.storyblok.com/f/143584/757x758/f7b07f187f/screenshot-2022-02-11-at-11-13-41-am.png";

const Homepage = () => {
	const storyblokApi = getStoryblokApi();
	const [signedUrl, setSignedUrl] = useState("");

	useEffect(() => {
		const fetchSpace = async () => {
			try {
				const params = {
					filename: privateAsset,
					version: "draft",
				};
				const { data } = await storyblokApi.get("cdn/assets/me", params);

				const imgServiceUrl = `https://private-img.storyblok.com/240x320/${encodeURIComponent(
					data.asset.signed_url
				)}`;

				setSignedUrl(imgServiceUrl);
			} catch (err) {
				console.log(err);
			}
		};
		fetchSpace();
	}, [storyblokApi]);

	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Image Services on Private Asset</h2>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{signedUrl && (
					<div style={{ margin: "auto" }}>
						<Image
							src={signedUrl}
							alt="Storyblok Private Asset"
							width={320}
							height={240}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Homepage;
