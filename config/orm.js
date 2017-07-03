// File Dependencies
// =============================================================
var db = require('./connections.js');

//Create exports object that contains all CRUD methods
module.exports = {
    //Queries the db table burgers, selects all data, and accepts a callback
    read : (table,callback) => {
        db.query('SELECT * FROM ' + table,(err,res)=>{
            //If theres an error throw it out to user
            if(err) throw err;
            //takes the callback function and returns the response
            callback(res);
        });
    },
    //Queries the db table burgers, inserts new burger_name, and accepts a callback
    create : (table,setParams, callback) => {
        db.query('INSERT INTO '+ table + ' SET ?', setParams ,(err,res)=>{
            //If theres an error throw it out to user
            if(err) throw err;
            //takes the callback function and returns the response
            callback(res);
        });
    },
    //Queries the db table burgers, updates the devoured boolean by ID, and accepts a callback
    update : (table,setParams,whereParams,callback)=>{
        db.query('UPDATE '+ table + ' SET ? WHERE ?',[setParams,whereParams], (err,res)=>{
            //If theres an error throw it out to user
            if(err) throw err;
            //takes the callback function and returns the response
            callback(res);
        });
    },
    //Queries the db table burgers, deletes all data in table, restarts id count, and accepts a callback
    delete : (table,callback)=>{
        db.query('TRUNCATE table '+ table ,(err,res)=>{
            //If theres an error throw it out to user
            if(err) throw err;
            //takes the callback function and returns the response
            callback(res);
        });
    }
};