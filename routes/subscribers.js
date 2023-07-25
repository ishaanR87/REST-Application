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
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// update sub
router.patch('/:id', (req, res) => {

})

// delete sub
router.delete('/:id', (req, res) => {

})

module.exports = router