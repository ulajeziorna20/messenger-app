const router = require("express").Router()

const express = require('express');
const multer = require('multer');

const app = express();

const userController = require('../controller/authController')

// const storage = multer.memoryStorage(); // Zapisywanie pliku w pamięci
// const upload = multer({ storage: storage });

// // app.post('/api/register',, (req, res) => {

// // });



// router.post('/user-register', upload.single('image'), userController.register)


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './backend/images'); // Podaj ścieżkę do katalogu, gdzie chcesz przechować plik tymczasowy
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Możesz zmienić nazwę pliku, jeśli chcesz
  },
});

const upload = multer({ storage: storage });


router.post('/user-register', upload.single('image'), userController.register)


module.exports = router