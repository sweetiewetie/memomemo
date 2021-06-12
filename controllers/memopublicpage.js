const bcrypt = require('bcrypt')
const PublicPage = require('../models/PublicPage')

module.exports = (req, res) =>{
    const { pageId, pagePW } = req.body;
    
    PublicPage.findOne({pageId:pageId}, (error,page) => {      
      if (page){   
               
        bcrypt.compare(pagePW, page.pagePW, (error, same) =>{          
          if(same){ 
            
              publicpage = page

            res.render('memopublicpage', {
              publicpage});
          }
          else{
            res.redirect('/memo/public')  
          }
        })
      }
      else{
        res.redirect('/memo/public')
      }
    })
}