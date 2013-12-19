'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var ThingSchema = new Schema({
  name: String,
  info: String,
  awesomeness: Number
});

// Validations
ThingSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Thing', ThingSchema);

var Schema = mongoose.Schema;
var userSchema = new Schema({
    UserId : Number,
    UserName : String,
    ApplicationName : String,
    Email : String,
    Password : String,
    PasswordQuestion : String,
    PasswordAnswer : String,
    IsApproved : Boolean,
    LastActivityDate : Date,
    LastLoginDate : Date,
    LastPasswordChangedDate : Date,
    CreationDate : Date,
    IsOnLine : Boolean,
    IsLockedOut : Boolean,
    LastLockedOutDate : Date,
    FailedPasswordAttemptCount : Number,
    FailedPasswordAttemptWindowStart : Date,
    FailedPasswordAnswerAttemptCount : Number,
    FailedPasswordAnswerAttemptWindowStart : Date,
    PersonalNumber : Number,
    Views : [{ViewName : String, default : ""}, {ViewAlias : String, default : ""}]
}); // protect from generating auto id

module.exports = mongoose.model('User', userSchema);