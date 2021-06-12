const Memo = require('../models/Memo.js')

module.exports = (req,res)=>{
    Memo.create(req.body,(error,memo)=>{
        if(error){
            return rex.redirect('memo/private/'+loggedIn)
    }
        res.redirect('/memo/private/'+loggedIn)  
})
}
