var StudentModel = require('../models/StudentModel.js');
var sm = new StudentModel();
function StudentController(){
    
}

StudentController.prototype.getAllStudents = function(req,res){
    
    sm.findAll(function(data){
        res.json(data);
    });
    
};
StudentController.prototype.addStudent = function(req,res){
    console.log('inside add studnet method');
    console.log(req.body);
    var newrec= req.body;
   sm.addStudent({name:newrec.name, id:newrec.id},function(data){
       res.json(data);
   });
}
StudentController.prototype.getStudent = function(req,res){
    console.log('inside get student method');
    var id = req.params.id;
    sm.find(id, function(data){
        
        res.json(data);
        
    });
}
StudentController.prototype.deleteStudent = function(req,res){
   console.log('inside delete student method');
    sm.remove(req.params.id, function(data){
        res.json(data);
    });
};
StudentController.prototype.updateStudent = function(req,res){
     var id = req.params.id;
    sm.updateStudent(id,req.body, function(data){
        res.json(data);
    })
}
module.exports = StudentController;