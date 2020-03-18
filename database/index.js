var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var optionSchema = mongoose.Schema({
  option: String,
  price: String
})

var listSchema = mongoose.Schema({
  lineItem: String,
  price: String,
  options: [optionSchema]
})

var projectSchema = mongoose.Schema({
  name: String,
  children: [listSchema]
});

var Project = mongoose.model('Project', projectSchema);
var List = mongoose.model('List', listSchema);
var Option = mongoose.model('Option', optionSchema);

var insertDocuments = function(name, listItems) {
  var newProject = new Project({name: name, children: []});
  for (let item of listItems) {
    console.log('item', item)
    let newItem = new List(item);
    newProject.children.push(newItem);
  }
  newProject.save()
    .catch((err) => console.log(err));
};

var findProject = function(query) {
  return Project.findOne(query, { _id: 0, __v: 0});
};

module.exports = {
  insertDocuments,
  findProject
};