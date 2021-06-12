const PublicPage = require('../models/PublicPage.js')

module.exports = (req,res)=>{
    PublicPage.create(req.body, (error,publicpage)=>{
        if(error){
            
            return res.redirect('/memo/public/createpage')
        }
        res.redirect('/memo/public')
    })
}