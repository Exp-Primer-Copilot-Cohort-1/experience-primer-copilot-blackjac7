// Create web server application with Node.js
// Run this application with command: node comments.js
// and visit http://localhost:8080/comments.html
// This application is similar to comments.php, but it uses Node.js
// instead of PHP.
// This application uses the Express web framework for Node.js
// http://expressjs.com/
// To install Express, run the following command in the terminal:
// npm install express
// To run this application, run the following command in the terminal:
// node comments.js
// and visit http://localhost:8080/comments.html
// This application uses the body-parser middleware for Node.js
// https://www.npmjs.com/package/body-parser
// To install body-parser, run the following command in the terminal:
// npm install body-parser
// The body-parser middleware allows us to parse the data from the
// HTTP request and use it in our application.
// The body-parser middleware adds a body property to the request
// object which contains the data from the HTTP request.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];
// Serve static files from the 'public' folder.
// Any files in this folder are accessible from the
// root of the URL: http://localhost:8080/file.ext
app.use(express.static(__dirname + '/public'));
// Configure body-parser to use JSON data.
app.use(bodyParser.json());
// Configure app to use bodyParser() to parse data from
// a POST request.
app.use(bodyParser.urlencoded({ extended: true }));
// GET /comments
// Return the list of comments.
// The list of comments is stored in the comments variable.
// The comments variable is an array of objects.
// Each object has two properties: name and comment.
// The name property is a string. It contains the name of the commenter.
// The comment property is a string. It contains the comment.
app.get('/comments', function(req, res) {
  res.send(comments);
});
// POST /comments
// Add a comment.
// The comment is in the HTTP request body.
// The body-parser middleware is used to parse the data from the
// HTTP request body and store it in the request.body property.
app.post('/comments', function(req, res) {
  // Add the comment to the list of comments.
  comments.push(req.body);
  // Return a JSON response to the client.
  res.send({ status: 'ok', comment: req.body });
});
// Start the web server on port 8080.
app.listen(8080);
console.log('Open http://localhost:8080/comments.html to view the comments');
// This is the end of the comments.js file.
// This is the end of the comments.js file.
// This is the end of the