'use strict';

const mongoose = require('mongoose');
const Molecule = require('./../molecules/user');
const Organism = mongoose.model('User', Molecule);

const create = require('./organelles/create')(Organism);
const find = require('./organelles/find')(Organism);
const findById = require('./organelles/findById')(Organism);
const update = require('./organelles/update')(Organism);
const remove = require('./organelles/remove')(Organism);

const Cell = {
  create,
  find,
  findById,
  update,
  remove
};

module.exports = Cell;