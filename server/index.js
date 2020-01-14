var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var { flattenData, compileBudgets, sortBudgets } = require('./dataWrangler.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/list/:projectName', (req, res) => {
  var projectName = req.params.projectName;
  var attempt = Promise.resolve(db.findProject({name: projectName}))
    .then((data) => {
      console.log(data);
      res.send(data.children);
    })
    .catch((err) => console.log(err));
})

app.post('/graph', (req, res) => {
  var data = req.body;
  var graphical = Promise.resolve(flattenData(data.data))
    .then((data) => {
      return compileBudgets(data);
    })
    .then((data) => {
      return sortBudgets(data);
    })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.post('/list', (req, res) => {
  var name = req.body.name;
  var listItems = req.body.listItems
  var post = Promise.resolve(db.insertDocuments(name, listItems))
    .then((msg) => res.send(msg))
    .catch((err) => console.log(err));
})

app.listen(3000, function() {
  console.log('making decisions on port 3000!');
});

