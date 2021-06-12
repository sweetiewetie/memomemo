const PublicPage = require('../models/PublicPage')

module.exports = async (req, res) => {

    PublicPage.findOneAndUpdate({ _id: req.params.id },
        req.body, { returnOriginal: false }, function (err, update) {
            if (err) {
               console.log(err)
            }
        })

    publicpage = await PublicPage.findOne({ _id: req.params.id });
    res.render('memopublicpage', {
        publicpage
    })
}