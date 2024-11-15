// my-nextjs-app/next.config.js
const nextTranslate = require('next-translate');
const dotenv = require('dotenv');

dotenv.config();

module.exports = nextTranslate({
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_BRAND_NAME: process.env.NEXT_PUBLIC_BRAND_NAME,
  },
  images: {
    domains: ['via.placeholder.com'],
  },
});