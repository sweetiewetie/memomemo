const mongoose = require('mongoose')

const PublicPage = require('./models/PublicPage')

mongoose.connect('mongodb+srv://soyeon:ONwave43@@cluster0.nut8h.mongodb.net/test',
{useUnifiedTopology: true, useNewUrlParser: true})

PublicPage.create({
    title: "publicmemo",
    body: "memomemo",
    
    PageId : "60ba52d128f9692d5485baaf", //userid ref'user'로
    category : "plzzz"

}, (error, memo)=>{
    console.log(error, memo)
})