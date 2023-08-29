const { GenerateToken, Authentication } = require('./authentication')
const User = require('../model/usermodel.js')


const RegisterUser = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })


    try {
        const findUser = await User.findOne({ "username": req.body.email })
        if (!findUser) {
            const saveUser = await newUser.save()
            return res.status(200).json("Successfully Registered!")

        }
        else {
            return res.status(404).json("User already exist")
        }

    }
    catch (err) {
        return res.status(404).json(err)

    }

}
const LoginUser = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const findUser = await User.findOne({ "email": email })

    if (findUser) {
        if (findUser.password == password) {
            GenerateToken(findUser, res)

        }
        else {

            return res.status(404).json({ "password": false })
        }

    }
    else {
        return res.status(404).json({ "user": false })
    }

}





module.exports = {
    RegisterUser, LoginUser}