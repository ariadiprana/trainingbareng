var Items = require('../models/items')

module.exports = {
  insert: function(req,res,next){
      var items = new Items({
        code:req.body.code,
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        stock:req.body.stock
      })
      items.save()
      res.json(items)
  }
}
