const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')


router.post('/items', itemsController.insert)

module.exports = router
