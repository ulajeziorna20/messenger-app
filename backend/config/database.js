const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/messenger');



const databaseConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, )
    .then(() => {
        console.log("Mongo DB is connected");
    })
    .catch((error) => {
        console.log(error);
    })
}

module.exports = databaseConnect