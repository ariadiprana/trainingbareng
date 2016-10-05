const express = require('express')
const router = express.Router()



router.get('/', function(req,res,next){
  res.render('home')
})

router.get('/items', function(req,res,next){
  res.render('page/items')
})

module.exports = router
