var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recept = require('../models/Recept.js');

// Get all recepies
router.get('/', function(req, res, next) {
  Recept.find(function(err, recepten) {
    if (err) return next(err);
    res.json(recepten);
  });
});

// Get recepie by id
router.get('/', function(req, res, next) {
  Recept.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Save recepie
router.post('/', function(req, res, next) {
  Recept.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Update recepie
router.post('/:id', function(req, res, next) {
  Recept.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

// Delete recepie
router.delete('/:id', function(req, res, next) {
  Recept.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

module.exports = router;