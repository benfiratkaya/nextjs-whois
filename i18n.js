module.exports = {
  locales: ["en", "tr"],
  defaultLocale: "en",
  pages: {
    "*": ["common", "languages", "footer", "whois-search", "whois-result"],
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/locales/${locale}/${namespace}.json`).then((m) => m.default),
};
