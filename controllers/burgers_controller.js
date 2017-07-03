// NPM Package Dependencies
// =============================================================
var express = require("express");

// File Dependencies
// =============================================================
var burgers = require('./../models/burger.js');

// Sets up the Express Router
// =============================================================
var router = express.Router();

//// GET request functions
// =============================================================
router.get('/',(req,res)=>{
    res.redirect('/index');
});

router.get('/index',(req,res)=>{
    burgers.selectAll((data)=>{
        var dataObject = {
            allBurgers: data
        };
        res.render('index',dataObject);
    });
});

router.get('/burgers/all',(req,res)=>{
    burgers.selectAll((data)=>{
        res.json(data);
    });
});

// POST request functions
// =============================================================
router.post('/burgers/new',(req,res)=>{
    //store the burger name as newBurger
    var newBurger = req.body.burger_name;
    //passes in newBurger and preforms a callback after it is done
    burgers.insertOne(newBurger,(data)=>{
        //ends the server communication
        res.end();
    });
});

// PUT request functions
// =============================================================
router.put('/burgers/devour',(req,res)=>{
    //store the burger id as burgerID
    var burgerID = req.body.id;
    //passes in burgerID, 1 for true, preforms a callback 
    burgers.updateOne(burgerID,1,(data)=>{
        //ends the server communication
        res.end();
    });
});

// DELETE request functions
// =============================================================
router.delete('/burgers/reset',(req,res)=>{
    //preforms a callback after deleteTable has completed
    burgers.deleteTable((data)=>{
        //ends the server communication
        res.end();
    });
});

//exports the router which can run the functions above without exporting those
module.exports = router;