const router = require('express').Router()

const mongoose = require('mongoose')
const person = require('../models/person')




router.post('/', async (req, res) => {
    // console.log(req.body)
    const newPerson = new person({
        _id: new mongoose.Types.ObjectId(),
        person_Image: req.body.person_Image,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        Age: req.body.Age,
        Married: req.body.Married,
        Description: req.body.Description,
        Nata: req.body.Nata
    })
    // console.log(newPerson)
    try {
        const send = await newPerson.save()
        res.status(201).json(send)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router