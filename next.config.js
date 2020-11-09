module.exports = {
	webpack: (config, { dev }) => {
		if (dev) {
			config.module.rules.push({
				test: /\.{js,ts,tsx}$/,
				loader: "eslint-loader",
				exclude: ["/node_modules/", "/.next/", "/out/"],
				enforce: "pre",
				options: {
					emitWarning: true,
					fix: true,
				},
			});
		}

		return config;
	},
	/* Internationalized routing - next */
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'en',
	}
};
