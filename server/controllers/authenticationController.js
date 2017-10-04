const jwt = require('jsonwebtoken');
// onst crypto = require('crypto');

const User = require('../models/user');
const config = require('../config/config');

const generateToken = (user) => {
  return jwt.sign(user, config.sessionSecret, {
    expiresIn: 10000 // in seconds
  });
};

// select user information from request (to be placed on the cookie)
const setUserInfo = (request) => {
  return {
    _id: request._id,
    firstName: request.profile.firstName,
    lastName: request.profile.lastName,
    email: request.email,
    role: request.role
  };
};

exports.login = (req, res) => {
  const userInfo = setUserInfo(req.user);

  res.status(200).json({
    token: `Bearer ${generateToken(userInfo)}`,
    user: userInfo
  });
};

exports.register = (req, res, next) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;

  if (!email) {
    return res.status(422).send({ error: 'You must provide an email address.' });
  }

  if (!firstName || !lastName) {
    return res.status(422).send({ error: 'You must enter your full name.' });
  }

  if (!password) {
    return res.status(422).send({ error: 'You must enter a password.' });
  }

  User.findOne({ email: email}, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email already in use.' });
    }

    const user = new User({
      email: email,
      password: password,
      profile: { firstName: firstName, lastName: lastName }
    });

    user.save((innerErr, user) => {
      if (innerErr) {
        return next(innerErr);
      }

      const userInfo = setUserInfo(user);

      res.status(201).json({
        token: `Bearer ${generateToken(userInfo)}`,
        user: userInfo
      });
    });
  });
};
