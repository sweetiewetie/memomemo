const Memo = require('../models/Memo.js')

module.exports = (req,res)=>{
    Memo.remove({_id:req.params.id},(error,page)=>{
       if(error){
        return res.redirect('/memo/private/'+loggedIn)
    }
    res.redirect('/memo/private/'+loggedIn)  
    })
}