'use strict';

var mongoose = require('mongoose'),
//    Thing = mongoose.model('Thing'),
    Users = mongoose.model('User'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
exports.portalUsers = function(req, res) {
  return Users.find(function (err, users) {
    if (!err) {
      return res.json(users);
    } else {
      return res.send(err);
    }
  });
};
