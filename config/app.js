const development = {
  URL: "http://localhost:3000",
};

const production = {
  URL: "https://whois.vercel.app",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
