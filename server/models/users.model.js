import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId;

let users;

export default class UsersData{
    static async injectDB(conn) {
        if(users){
            return
        }
        try {
            users = await conn.db(process.env.RESTPRSYS_NS).collection("users");
        } catch (e) {
            console.error (
                `Unable to establish a collection handle in UsersData: ${e}`
            )
        }
    }

    static async addReview(email, family_name, given_name, picture, date) {
        try {
            const userDoc = {
                email: email,
                family_name: family_name,
                given_name: given_name,
                picture: picture,
                date: date
            }

            return await users.insertOne(userDoc)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return {error: e}
        }
    }
}