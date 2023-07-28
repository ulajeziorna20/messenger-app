// import formidable from 'formidable'
// const formidable = require("formidable");
let util = require('util');


module.exports = {

    register: (req, res) => {
        

        // const reader = new FileReader()

        // let myFile = req.body.image

        // reader.onload = function(e)
        // {
        //     req.body.image = e.target.result;
        // };

        // reader.readAsBinaryString(myFile);

        console.log(JSON.parse(req.body));

        console.log('register is working');
    }


}