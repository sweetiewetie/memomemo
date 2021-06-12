const PublicPage = require('../models/PublicPage.js')

module.exports = (req,res)=>{
    PublicPage.remove({_id:req.params.id},(error,page)=>{
       if(error){
        return res.redirect('/memo/public')        
    }
    res.redirect('/memo/public')  
    })
}