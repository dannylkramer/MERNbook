const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function to get user from token
  getUserFromToken: function (token) {
    if (!token) {
      return null;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      return data;
    } catch {
      console.log('Invalid token');
      return null;
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

