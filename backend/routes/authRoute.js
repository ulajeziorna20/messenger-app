const router = require("express").Router()


const userController = require('../controller/authController')
router.post('/user-register', userController.register)



module.exports = router