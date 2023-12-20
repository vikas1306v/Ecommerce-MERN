const mongoose = require('mongoose');
const connectToDb = () => {
   
    mongoose.connect('mongodb://localhost:27017/ecommerce').then(() => {
        console.log('Connected to db');
    }).catch((e) => {
        console.log(e);
    });
}

// module.exports = connectToDb;

module.exports = connectToDb;
