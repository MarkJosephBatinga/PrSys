import UsersModel from "../models/users.model.js";
import { ObjectId } from 'bson';

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