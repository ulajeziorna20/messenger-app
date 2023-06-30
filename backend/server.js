const express = require('express');
const app = express()
// zew zasób
const dotenv = require('dotenv')

const PORT = process.env.PORT || 5000

// MongoDB connect
const databaseConnect = require('./config/database')

dotenv.config({
    path: "backend/config/config.env"
})

app.get('/', (req, res) => {
    res.send('This is from backend')
} )



databaseConnect()



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})