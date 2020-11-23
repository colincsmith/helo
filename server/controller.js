const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const picture = `https://robohash.org/${username}.png`

        const foundUser = await db.check_user(username)
        if(foundUser[0]){
            return res.status(400).send('username already registered')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const[newUser] = await db.add_user([username, hash, picture])
        req.session.userId = {
            userid: newUser.id
        }
        res.status(200).send({
            id: newUser.id,
            username: newUser.username,
            picture: newUser.picture 
        })
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
            req.session.userId = {
                userid: user.id
            }

            return res.status(200).send({
                id: user.id,
                username: user.username,
                picture: user.picture
            })
        } else {
            res.status(401).send('incorrect info')
        }
    }
}