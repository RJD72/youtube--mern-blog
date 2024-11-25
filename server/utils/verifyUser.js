const jwt = require("jsonwebtoken");
const { errorHandler } = require("./error");

// Middleware function to verify JWT token from cookies
const verifyToken = (req, res, next) => {
  // Extract the access token from cookies
  const token = req.cookies.access_token;

  // Check if the token is missing
  if (!token) {
    // If no token is found, call the next middleware with an Unauthorized error
    return next(errorHandler(401, "Unauthorized"));
  }

  // Verify the token using the secret key
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    // If there's an error during verification (e.g., invalid or expired token)
    if (err) {
      // Call the next middleware with a Forbidden error
      return next(errorHandler(403, "Forbidden"));
    }

    // If the token is valid, attach the user information to the request object
    req.user = user;

    // Call the next middleware in the stack
    next();
  });
};

module.exports = verifyToken;
