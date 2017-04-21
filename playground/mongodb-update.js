// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58ce7c23006adcb2bc77fcfa') // filter
  }, {
    $set: {
      completed: true // update with $set operator
    }
  }, {
    returnOriginal: false // option for return the updated document
  }).then((result) => {
    console.log(result); // Promise if no callback passed
  });
  */

// Using MongoDB Update operator [$inc, $set]
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58ce7e50006adcb2bc77fdab')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1 // Increment value of field
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
  
});
