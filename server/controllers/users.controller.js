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

            const userResponse = await UsersModel.addReview(
                email,
                family_name,
                given_name,
                picture,
                date
            )
             
            const params = {
                email,
                login_magic_link_url: "http://localhost:3000/dashboard",
                signup_magic_link_url: "http://localhost:3000/dashboard"
            }

            const linkResponse = await stytchClient.magicLinks.email.loginOrCreate(params)
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error: e.message})
        }
    }
}

// apiGetUsersById


// apiGetUsers


// apiPostUser


// apiPutUser


// apiDeleteUser