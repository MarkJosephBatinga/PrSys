import http from "../http-common"

class UserDataService {
    createUser(data) {
        return http.post("/", data);
    }
}

export default UserDataService;