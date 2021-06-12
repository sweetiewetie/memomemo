const Memo = require('../models/Memo')

module.exports = async(req, res) => {
    console.log("this")
    const memo = await Memo.findById(req.params.id)

        res.render('memoprivatepage', {
            memo
        });
    }
   
