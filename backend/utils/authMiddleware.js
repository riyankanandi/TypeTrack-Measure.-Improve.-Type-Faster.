const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
 // const authHeader = req.headers.authorization;

  // if (!authHeader|| !authHeader.startsWith("Bearer "))
  //   return res.status(401).json({ message: "Token missing" });

  // const token = authHeader.split(" ")[1];
   const token =
    req.cookies.token ||
    req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
