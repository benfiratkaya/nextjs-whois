import whois from "../../libs/whois-json";

const WhoisQuery = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  if (req.method === "POST") {
    if (req.body.domains) {
      const results = [];
      await Promise.all(
        req.body.domains.split("\n").map(async (domain) => {
          const result = await whois(domain);
          results.push({
            ...result,
            domain,
          });
        })
      );
      res.json(results);
    } else {
      res.json({ status: false, errorCode: 404 });
    }
  } else {
    res.json({ status: false, errorCode: 404 });
  }
};

export default WhoisQuery;
