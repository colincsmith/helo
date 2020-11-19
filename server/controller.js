const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const foundUser = await db.check_user(username)
        if(foundUser[0]){
            return res.status(400).send('username already registered')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const[newUser] = await db.add_user([username, hash])
        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [foundUser] = await db.check_user(username)
        const user = foundUser[0]
        if(!user){
            return res.status(401).send('incorrect info')
        }
        const authenticated = bcrypt.compareSync(password, user.password)
        if(authenticated){
            return res.status(200).send({
                id: user.id,
                username: user.username
            })
        } else {
            res.status(401).send('incorrect info')
        }
    }
}