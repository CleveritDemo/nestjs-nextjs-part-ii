// my-nextjs-app/i18n.js
module.exports = {
  locales: ['en', 'es'], // Agrega los idiomas que soportas aquí
  defaultLocale: 'en',
  pages: {
    '*': ['common'], // Especifica los namespaces para cada página
  },
};