const express = require('express');
const app = express()


// parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





// zew zasób
const dotenv = require('dotenv')
const cors = require('cors');

const PORT = process.env.PORT || 5000

// MongoDB connect
const databaseConnect = require('./config/database')

// configuration
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// router
const authRouter = require("./routes/authRoute")




dotenv.config({
    path: "backend/config/config.env"
})


app.use('/api/messenger', authRouter)



app.get('/', (req, res) => {
    res.send('This is from backend')
})


databaseConnect()



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})