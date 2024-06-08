const router = require('express').Router();
const studentController = require('../controller/studentController');

router.route('/')
    .get(studentController.getAllStudent)
    .post(studentController.createStudent)
    .put(studentController.updateStudent);

router.route('/:id')
    .get(studentController.getStudent)
    .delete(studentController.deleteStudent);

module.exports = router;