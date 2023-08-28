const express = require('express');
const app = express()





let util = require('util');
// busboy for multiply data
// const Busboy = require('busboy');
// const busboyBodyParser = require('busboy-body-parser');

// app.use(busboyBodyParser())

const multer = require('multer')
const RegisterSchema = require('../models/authModel')
// const uploads =   multer({dest: __dirname + "/uploads"})

// const Storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({
//     storage: Storage
// }).single('testImage')


module.exports = {

    register: (req, res) => {



        // const username = req.body.username;
        // const photo = req.file; // Tutaj masz dostęp do pliku


        // console.log(photo);

        // // Wykonaj operacje na danych (np. zapisz w bazie danych)

        // res.json({ message: 'Rejestracja zakończona pomyślnie' });


        const photo = req.file; // Obiekt zawierający informacje o przesłanym pliku

        const photoPath = photo.path; // Oto ścieżka do tymczasowego pliku na serwerze


        console.log(req.body);

        // Operacje na danych lub zapisanie ścieżki w bazie danych
        // ...


        // res.json({ message: 'Plik został przesłany i zapisany.' });


        const newUser = new RegisterSchema(req.body);
        newUser.save().then(() => {
            res.json({

                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
                image: req.file

            })

        }).catch((err) => {
            res.json({
                error: true,
                message: err
            });
        });



        // upload(req, res, (err) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         const newRegistration = new RegisterSchema({
        //             username: req.body.username,
        //             email: req.body.email,
        //             password: req.body.password,
        //             confirmPassword: req.body.confirmPassword,
        //             imageField: req.body.image
        //         })


        //         newRegistration.save().then(() => {
        //             res.send("successfully upload")
        //         }).catch((err) => {
        //             console.log(err);
        //         })
        //     }
        // })




        // let busboy = Busboy({ headers: req.headers })


        // busboy.on('field', (fieldname, value, fieldnameTruncated, valTruncated) => {
        //     console.log(`Field ${fieldname}, value ${util.inspect(value)}`);
        // })


        // // files


        // busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        //     console.log(`Field ${fieldname}, filename ${file}`);

        //     file.on('data', (data) => {
        //         console.log(`Field ${fieldname}, got ${data.length} bytes`);
        //     })
        // })


        // // habdle form data here
        // req.pipe(busboy)




        // console.log(req.fields);// contains non-file fields
        // console.log(req.files); // contains files


        // const form = formidable();
        // form.parse(req, async (err, fields, files) => {

        //     console.log(fields);
        // })

        // const form = formidable({});

        // form.parse(req, (err, fields, files) => {
        //     if (err) {
        //         next(err);
        //         return;
        //     }
        //     console.log(files);
        //     res.json({ fields, files });
        // });

        //     let form = new formidable.IncomingForm();
        //     form.parse(req, (err, fields, files) => {
        //        if(err) {
        //           console.log(err);
        //           return res.send(err);
        //        } else {
        //           console.log('ji');
        //           console.log(files);

        //        }
        // })

        // console.log(req.body);
        // console.log(req.files);


        // res.json({ status: "files received" })

        // const reader = new FileReader()

        // let myFile = req.body.image

        // reader.onload = function(e)
        // {
        //     req.body.image = e.target.result;
        // };

        // let o = reader.readAsBinaryString(myFile);

        // console.log(o);

        console.log('register is working');
    }


}