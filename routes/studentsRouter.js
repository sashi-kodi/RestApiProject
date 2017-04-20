var express = require('express');
var router = express.Router();
var StudentController = require('../controllers/StudentController');
var sc = new StudentController();

router.get('/:id', sc.getStudent.bind(sc));
router.get('/', sc.getAllStudents.bind(sc));
router.post('/', sc.addStudent.bind(sc));
router.delete('/:id', sc.deleteStudent.bind(sc));
router.put('/:id', sc.updateStudent.bind(sc));
module.exports = router;