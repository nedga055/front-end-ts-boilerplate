const NextI18Next = require("next-i18next").default;

const nextI18NextInstance = new NextI18Next({
	defaultLanguage: "en",
	otherLanguages: ["fr"],
	fallbackLng: ["en", "fr"],
	defaultNS: "common",
	localeSubpaths: {
		"en": "en",
		"fr": "fr",
	},
});

module.exports = nextI18NextInstance;
module.exports = {
	appWithTranslation, withTranslation
} = nextI18NextInstance;
