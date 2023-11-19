// Create web server  and redirect to the home page

var express = require('express');
var router = express.Router();
var fs = require('fs');

// POST /comments
router.post('/', function(req, res, next) {
  // Read comments file
  fs.readFile('comments.json', function(err, data) {
    if (err) {
      console.log(err);
    }
    // Convert to JSON
    var comments = JSON.parse(data);
    // Add new comment to the comments array
    comments.push(req.body);
    // Write comments back to file
    fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
      if (err) {
        console.log(err);
      }
      // Redirect to home page
      res.redirect('/');
    });
  });
});

module.exports = router;