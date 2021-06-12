const Memo = require('../models/Memo.js')

module.exports = async(req,res)=>{
    
    const memoes = await Memo.find({
        userid:req.params.id
    })
    res.render('memoprivate',{
        memoes
    });
}