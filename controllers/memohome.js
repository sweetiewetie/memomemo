const User = require('../models/User.js')

module.exports = async(req,res)=>{
    
    res.render('memohome',{
        loggedIn
    })
}