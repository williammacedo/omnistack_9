const User = require('../models/User')
//index, store, show, update, destroy
module.exports = {
    async store(req, res) {
        const { email } = req.body
        //Fazer um upsert, update and insert
        // const filter = { email }
        // const dataToUpsert = { email }
        // const user = await User.findOneAndUpdate(filter, dataToUpsert, {
        //     new: true,
        //     upsert: true
        // })
        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    }
}