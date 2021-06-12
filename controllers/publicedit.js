const PublicPage = require('../models/PublicPage')

module.exports= async(req,res)=>{
    const page = await PublicPage.findById(req.params.id)
    res.render('publicedit', {
        page
    })  
}

    
