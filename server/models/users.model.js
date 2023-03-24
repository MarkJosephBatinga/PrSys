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

    static async addUser(email, family_name, given_name, picture, date) {
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

    static async getUser({email} = {}) {

        let query;
        query = {"email": { $eq: email}};
        let cursor;

        try {
            cursor = await users.find(query);
        }catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return {user: null};
        }

        const displayCursor = cursor.limit(1);

        try {
            const user = await displayCursor.toArray();

            return user;
        } catch {
            console.error(
                `Unable to convert cursor to object ${e}`
            )
            return {user: null}
        }
    }
}