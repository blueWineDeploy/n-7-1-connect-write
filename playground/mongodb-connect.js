
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6

//var obj = new ObjectID();
//console.log(obj);

/*
// Oject destructuring : ES6
var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);
*/

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/TodoApp", function (err, db) {
   
     if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /*
    // Insert one document.
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
  
        console.log(JSON.stringify(result.ops, undefined, 2)); // ops attribute will store all of document you inserted.
    });*/

    /*
    db.collection('Users').insertOne({
        name: 'Annie',
        age: 46,
        location: 'Los Angeles'
      }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());

        //console.log(result.ops);
    });
    */


    db.close();
});