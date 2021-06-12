const Memo = require('../models/Memo')

module.exports= async(req,res)=>{
    const memo = await Memo.findById(req.params.id)
    res.render('privateedit', {
        memo
    })
}