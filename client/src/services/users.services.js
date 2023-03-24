import http from "../http-common"

class UserDataService {
    createUser(data) {
        return http.post("/", data);
    }
    getUser(data) {
        return http.get("/email/:email", data);
    }
}

export default UserDataService;