import UsersModel from "../models/users.model.js";
import { ObjectId } from 'bson';
import * as stytch from 'stytch';

const stytchClient = new stytch.Client({
    project_id: "project-test-76b88fdc-83af-4650-a98c-5e074e5b2c33",
    secret: "secret-test-BRLHLQ08BVXBcdktaisYyqqcXPE_hCMYWEM=",
    env: stytch.envs.test
})

export default class UsersController {
    static async apiPostUser(req, res, next) {
        try {
            const email = req.body.email
            const family_name = req.body.family_name
            const given_name = req.body.given_name
            const picture = req.body.picture
            const date = new Date()

            const userResponse = await UsersModel.addUser(
                email,
                family_name,
                given_name,
                picture,
                date
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
    // apiGetUsersById
    static async apiGetUsersByEmail(req, res, next) {
        try{
        let email = req.query.email || {}

        console.log(email)
        const user = await UsersModel.getUser({email})
        if(!user) {
            res.status(404).json({error: "Not Found"})
            return
        }
        res.json(user)
        } catch (e) {
            console.log(`api : ${e}`)
            res.status(500).json({ error: e })
        }
    }
}




// apiGetUsers


// apiPostUser


// apiPutUser


// apiDeleteUser