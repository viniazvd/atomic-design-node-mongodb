const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Molecule = {
  name    : require('./../atoms/name'),
  email   : require('./../atoms/email'),
  password: require('./../atoms/password')
}

module.exports = new Schema(Molecule);