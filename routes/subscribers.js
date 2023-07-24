const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// get all subs
router.get('/',  async (req, res) => {
    try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

// get one sub
router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

// create sub
router.post('/', (req, res) => {

})

// update sub
router.patch('/:id', (req, res) => {

})

// delete sub
router.delete('/:id', (req, res) => {

})

module.exports = router