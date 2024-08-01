const nextTranslate = require("next-translate");
const dotenv = require("dotenv");

dotenv.config();

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
  },
});
