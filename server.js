var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var nosql = require('nosql');
var db = nosql.load('./db/blog.nosql');

app.listen(port);

app.route('/article')
	.get(function (req, res) {
		db.find().make(function(builder) {
			builder.callback(function(err, response) {
				res.send(response);
			});
		});
	})
	.post(function (req, res) {
		res.send(db.insert(
    {
      id: req.body.id, 
      head: req.body.head, 
      content: req.body.content,
      date: req.body.date
    }));
	})
;

app.route('/article/:id')
	.delete(function (req, res) {
		db.remove().make(function(builder) {
			console.log("id = " + req.params.id);
			builder.where('id', '=', Number(req.params.id));
			builder.callback(function(err, count) {
				console.log('removed documents:', count);
			});
		});
	})
;


console.log('RESTful API server started on: ' + port);
