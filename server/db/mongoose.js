var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

//process.env.MONGODB_URI === 'production';
//process.env.MONGODB_URI === 'development';
//process.env.MONGODB_URI === 'test'; //running through mocha
