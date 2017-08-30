var {mongoose} = require('./db/mogoose.js'); 
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/user.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Server is listening on 3000'); 
});