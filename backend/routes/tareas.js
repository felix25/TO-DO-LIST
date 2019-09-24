const { Router } = require('express');
const router = Router();

const { getTareas,getTareaById,updateTareas,register } = require('../models/tareas');

router.route('/')
    .get(getTareas)
    .post(register)
router.route('/:id')
    .get(getTareaById)
    .put(updateTareas)
    .delete()

module.exports = router;