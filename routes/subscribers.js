const express = require('express')
const router = express.Router()

// get all subs
router.get('/', (req, res) => {
    res.send('Hello World')
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