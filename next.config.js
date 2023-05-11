/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "private-img.storyblok.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
