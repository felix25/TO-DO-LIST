const { Router } = require('express');
const router = Router();


const { registerUser } = require('../models/signup');

router.route('/')
    .get()
    .post(registerUser)
module.exports = router;