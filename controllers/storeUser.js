const User = require('../models/User.js')

module.exports = (req,res)=>{ 
    User.create(req.body,(error, user)=>{
        if(error){
            return res.redirect('/auth/signup')        
        }        
        res.redirect('/')  
    })        
}