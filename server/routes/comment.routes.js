var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwtExpress = require('../middlewares/jwt-express');
var service = require('../services/comment.service');

var comment = require('../models/comment');
var _ = require('lodash');

// Token Check before using API
router.use(jwtExpress());

/**
 * find documents based on the filter
 */
router.post('/find', function(req, res) {
  console.log("find all comments");
  service.find(req.body, function(result){
    res.send(result);
  })
});

/**
 * find comments by activity
 */
router.post('/findByActivity', function(req, res) {

  var activity = req.body.activity;

  if (activity.className === 'Activity') {
    var query = comment.query.getActivityQuery(activity);
    const currentIndex = req.body.currentIndex;
    const amount = req.body.amount;

    service.find(query, function(result){
      var objects = result.payload;
      var end = currentIndex + amount > objects.length ? currentIndex + amount : objects.length;
      objects = _.slice(objects, currentIndex, currentIndex + amount);
      result.payload = objects;
      res.send(result);
    })
  }

});

/**
 * Save a new record
 */
router.post('/save', function(req, res) {
  var newComment = req.body.comment;
  newComment.owner = comment.setOwner(req.body.owner);
  service.save(newComment, function(result) {
    res.send(result);
  })
});


module.exports = router;