var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');
var { flattenData, compileBudgets, sortBudgets } = require('./dataWrangler.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

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

app.listen(3000, function() {
  console.log('making decisions on port 3000!');
});

