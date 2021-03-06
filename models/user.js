const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const Schema   = mongoose.Schema;
const config   = require('../config/database');

// Creating user model
const UserSchema = Schema({
    name:     {
        type:     String,
    },
    email:    {
        type:     String,
        required: true,
        unique:   true
    },
    username: {
        type:     String,
        required: true,
        unique:   true,
    },
    password: {
        type:     String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
    const query = { username: username };
    User.findOne(query, callback);
};

module.exports.addUser =  (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback)
        })
    });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if (err) throw err;
      callback(null, isMatch);
  });
};