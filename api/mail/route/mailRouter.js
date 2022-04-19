const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')

router.post('/sendmail', controller.sendmail)
router.post('/sendmailtodb', controller.sendmailtoDB)

module.exports = router