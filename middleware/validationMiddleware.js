module.exports = (req,res,next)=>{
    
        if(req.body.pageId ==null || req.body.pagePW == null){
            return res.redirect('/memo/public/createpage')
        }
        next()
    
}