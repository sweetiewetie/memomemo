const Memo = require('../models/Memo.js')

module.exports = (req,res)=>{
    Memo.create(req.body, (error,addingmemo)=>{
        
        if(error){
          console.log(error)  
            return res.redirect('/memohome')
        }
        
        res.redirect('/memo/private/'+loggedIn)
        })
    
}