const jwt = require("jsonwebtoken");

const checkJwt = (req, res, next) => {
  // const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(" ")[1];
  const accessToken = req.cookies.accessToken;
  console.log(req.cookies);

  if (accessToken == null) return res.sendStatus(401);

  try {
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    // Inject to request
    req.email = payload.email;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

module.exports = {
  checkJwt,
};
