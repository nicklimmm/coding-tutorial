const jwt = require("jsonwebtoken");

const checkJwt = (req, res, next) => {
  // const authHeader = req.headers.authorization;
  // const token = authHeader && authHeader.split(" ")[1];
  const token = req.cookies.token;
  console.log(req.cookies);

  if (token == null) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);

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
