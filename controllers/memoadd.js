const Memo = require('../models/Memo.js')

module.exports = async(req,res)=>{
    
    const category = await Memo.findById(req.params.id)
    const getCategory = category.category

    console.log(getCategory)
    res.render('memoadd', {
        getCategory})
}