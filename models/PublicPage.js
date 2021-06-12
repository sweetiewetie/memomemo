const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const PublicPageSchema = new Schema({
    pageId: {
        type: String,
        required: true,
        unique: true
    },
    pagePW:{
        type: String,
        required: true
    },
    title: String,
    body: String,
    finaldate:{
        type: Date,
        default: new Date()
    }
   
})
PublicPageSchema.pre('save',function(next){
    const publicpage = this
    
    bcrypt.hash(publicpage.pagePW, 10, (error,hash)=>{
        publicpage.pagePW = hash
        next()
    })
})

const PublicPage = mongoose.model('PublicPage', PublicPageSchema)
module.exports = PublicPage