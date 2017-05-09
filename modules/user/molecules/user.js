const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Molecule = {
  name    : String, //require('./../atoms/name'),
  email   : String,//require('./../atoms/email'),
  password: String //require('./../atoms/password')
}

module.exports = new Schema(Molecule);