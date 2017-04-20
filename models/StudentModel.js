var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    name:{type:String, required:true},
    id: { type:Number, require:true, unique:true}
});
var studentsModel = mongoose.model('StudentsModel', studentSchema, 'studentstb');

function StudentsDBModel(){
    
}

StudentsDBModel.prototype.findAll = function(cb){
    studentsModel.find({}, function(err,data){
        if(err) cb({message:"error occured while tring to fetch records from database"});
        else cb(data);
    });
}
StudentsDBModel.prototype.addStudent = function(data,cb){
    studentsModel.create(data, function(err,res){
       if (err) cb({message:"error occured while trying to add new record"});
        else cb({message:"record added successfully"});
    });
}
StudentsDBModel.prototype.find = function(sid, cb){
    console.log(sid);
    studentsModel.findOne({id:sid},function(err,data){
        if(err) cb({message:"error occured while tring to fetch records from database"});
        else cb(data);
    })
}
StudentsDBModel.prototype.updateStudent= function(sid,data,cb){
    studentsModel.findOne({id:sid}, function(err,rec){
        if(err) cb({message:"error occured while trying to fetch recrod"});
        else {
            if(!rec) cb({message:"such a record does not exist"});
            else{
             for (key in data){
                rec[key]=data[key];
            }
            rec.save(function(err,data){
                if(err) cb({message:"error occured while trying to update recrod"});
                else cb({message:"Record updated"});
            });   
            }
            
        }
    })
}
StudentsDBModel.prototype.remove = function(sid, cb){
    studentsModel.findOne({id:sid}, function(err,data){
        if(err) cb({message: "error occured while trying to delete"});
        else {
            if(!data) cb({message:"such a record does not exist"});
            else {
                data.remove(function(err,data){
                    cb({message:"record removed"});
                });
            }
        }
    });
}
module.exports= StudentsDBModel;