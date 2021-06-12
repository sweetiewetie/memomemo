const Memo = require('../models/Memo')

module.exports = async (req, res) => {

    Memo.findOneAndUpdate({ _id: req.params.id },
        req.body,  { returnOriginal: false }, function (err, update) {
            if (err) {
               console.log(err)
            }
        })
    res.redirect('/memo/privatememo/req.params.id')
}