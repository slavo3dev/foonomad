/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { withFrameworkConfig } = require("./framework/common/config");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
// eslint-disable-next-line no-undef
module.exports = withNextEnv();

// module.exports = {
// 	i18n: {
// 		locales: ["en-US","es"],
// 		defaultLocal: "en-US"
// 	}
// };

module.exports = withFrameworkConfig({
	framework: {
		name: process.env.NEXT_PUBLIC_FRAMEWORK
	},
	i18n: {
		locales: ["en-US", "es"],
		defaultLocale: "en-US"
	}
});