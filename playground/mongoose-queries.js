const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58d5abe9f5e71230045b90eb';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid');
}
/*
Todo.find({
  _id: id // we don't need to convert string to ObjectID
}).then((todos) => {
  console.log('Todos', todos);
});


Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});
*/

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id was not found');
  }
  console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById('58d18c40aeb36d21d0681d6d').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
