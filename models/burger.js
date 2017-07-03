// File Dependencies
// =============================================================
var orm = require('./../config/orm.js');

//creates the methods that will send the intended request for burgers.js to the orm.js which will preform the database action 
module.exports = {
    selectAll: (callback)=>{
        //queries database via orm and preforms a callback
        orm.read('burgers',(data)=>{
            //returns the data to the callback function that was passed
            callback(data);
        });
    },
    insertOne: (burgerName,callback)=>{
        //creating object with id and value for the database
        var setParams = {
            'burger_name': burgerName
        };
        
        //queries database via orm, passes burgerName and preforms a callback
        orm.create('burgers',setParams,(data)=>{
            callback(data);
        });
    },
    updateOne : (burgerID,boolean,callback)=>{
        //Parameters to Set(key and value)
        setParams = {
            'devoured': boolean,
        };
        //Change the above parameters where id is equal matches burgerID
        whereParams = {
            'id': burgerID
        };

        //queries database burgers table via orm, passes burgerID, boolean, and preforms callback
        orm.update('burgers',setParams,whereParams,(data)=>{
            callback(data);
        });
    },
    deleteTable: (callback)=>{
        //queries database and deletes burgers table via orm and preforms callback
        orm.delete('burgers',(data)=>{
            callback(data);
        });
    }
};