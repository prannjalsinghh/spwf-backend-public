const express =require('express');
const router =express.Router();
const contact = require('../models/adminModel')
const Volunteer = require('../models/volunteerModel')
const user = require('../models/user')



router.route("/createContactUs").post((req,res)=>{
    const name = req.body.name;
    const email= req.body.email;
    const phone =req.body.phone;
    const subject = req.body.subject;
    const message= req.body.message;

    const newContact = new contact({
        name,email,phone,subject,message
    })

    newContact.save();
})

router.route("/getContactUs").get((req,res)=>{
    contact.find().then(foundData =>{res.json(foundData);})
})

router.route("/createVolunteer").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const Zip = req.body.Zip;
    const volunteerType = req.body.volunteerType;

    const newVolunteer = new Volunteer({
        name,email,phone,Zip,volunteerType
    })
    newVolunteer.save();
})
router.route("/getVolunteer").get((req,res)=>{
    Volunteer.find().then(foundData=>{res.json(foundData)});
})

router.route("/getUser").get((req,res)=>{
    user.find().then(foundData=>{res.json(foundData)});
})

    

module.exports = router;