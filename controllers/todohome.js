module.exports = (req, res) => {
  if(req.session.id){
    res.render('todoindex');   
  }
  else{
    res.redirect('/')
  }
}