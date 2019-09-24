const { Router } = require('express');
const router = Router();

const { getUsers,validateUSer } = require('../models/users');

router.route('/')
    .get(getUsers)
    .post(validateUSer)
router.route('/:id')
    .get()
    .put()
    .delete()

module.exports = router;