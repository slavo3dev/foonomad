/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
// eslint-disable-next-line no-undef
module.exports = withNextEnv();