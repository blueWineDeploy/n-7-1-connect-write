var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('mongodb://getitdone:120606@ds031867.mlab.com:31867/todoapp' || 'mongodb://localhost:3000/TodoApp');

module.exports = {mongoose};

//process.env.MONGODB_URI === 'production';
//process.env.MONGODB_URI === 'development';
//process.env.MONGODB_URI === 'test'; //running through mocha
