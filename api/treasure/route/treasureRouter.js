const express = require('express')
const router = express.Router()
const Treasure = require('../model/Treasure')

const controller = require('../controller/controller')

router.get('/', controller.find)
router.get('/:_id', controller.findOne)
router.post('/', controller.create)
router.post('/update/:_id', controller.updateOne)
router.post('/feedback/:_id', controller.addFeedback)
router.post('/delete/:_id', controller.deleteOne)

module.exports = router