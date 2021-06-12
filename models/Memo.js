const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MemoSchema = new Schema({
    title: String,
    body: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Memo = mongoose.model('Memo', MemoSchema)
module.exports = Memo