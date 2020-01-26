

const express = require("express");

const router = express.Router();

const Ninja=require("./models/ninja")



router.get("/ninjas", (req, res,next) => {

    res.send({ type: "GET" })


})

// saving to database and handle error
router.post("/ninjas", (req, res,next) => {

    Ninja.create(req.body).then((x)=>{


            res.send(x)

    }).catch(next)

 

    console.log(req.body)


})

//updating *2nd param is update data

router.put("/ninjas/:id", (req, res,next) => {

   

    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{

        Ninja.findOne({_id:req.params.id}).then((x)=>{

            res.send(x)

        })
     

    })

    


})


// delete from database 
router.delete("/ninjas/:id", (req, res,next) => {

    Ninja.findByIdAndRemove({_id:req.params.id}).then((ninja)=>{

            res.send(ninja)

    }).catch(error)
    res.send({ type: "DELETE" })

})


module.exports = router;