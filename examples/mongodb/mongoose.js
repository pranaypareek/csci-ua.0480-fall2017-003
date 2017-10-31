const mongoose = require('mongoose');
// databases abstraction layer
// ORM object relational mapper
// 1. connect to the database
// 2. give us an api to use the database

// schemas / models ---- which are essentially to collections
// instances of schemas / models ------ individual documents

// to define a schema (what our data looks like / our data model)
// define properties of every Cat document, and the types of those
// props
// property - name of prop on documents
// value - type of that prop on documents
const CatSchema = new mongoose.Schema({
    name: String,
    lives: Number
});
// "registring" your schema
// name as a string mapped to actual schema object
mongoose.model('Cat', CatSchema);


const Cat = mongoose.model('Cat');



// in another file

mongoose.connect('mongodb://localhost/class15');
const c = new Cat({
    name: 'bill furry',
    lives: 4
});

/*
c.save((err, cat, count) => {
    console.log(err, cat, count);
});
*/
Cat.find((err, cats, count) => {
     console.log(cats);
});







