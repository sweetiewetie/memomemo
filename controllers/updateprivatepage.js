const Memo = require('../models/Memo')

module.exports = async (req, res) => {
    const memo = req.params.id
    Memo.findOneAndUpdate({ _id: req.params.id },
        req.body,  { returnOriginal: false }, function (err, update) {
            if (err) {
               console.log(err)
               res.redirect('/memohome')
            }
        })
    res.redirect('/memo/privatememo/'+memo)
}