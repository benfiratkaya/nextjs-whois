import whois from "whois-parsed-v2";

const WhoisQuery = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  if (req.method === "POST") {
    if (req.body.domains) {
      const results = [];
      await Promise.all(
        req.body.domains.split("\n").map(async (domain) => {
          try {
            const result = await whois.lookup(domain);
            results.push(result);
          } catch (error) {
            results.push({
              domainName: domain,
              error: true,
              message: error.message,
            });
          }
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
