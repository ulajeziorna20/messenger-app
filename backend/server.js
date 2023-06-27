const express = require('express');
const app = express()

const PORT = process.env.PORT || 3005

app.get('/', (req, res) => {
    res.send('This is from backend')
} )





app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})