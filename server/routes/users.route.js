import express from "express";
import UsersController from "../controllers/users.controller.js";

const router = express.Router();

// router.route("/id/:id").get(UsersCtrl.apiGetUsersById);

router.route("/")
    // .get(UsersCtrl.apiGetUsers)
    .post(UsersController.apiPostUser)
    // .put(UsersCtrl.apiPutUser)
    // .delete(UsersCtrl.apiDeleteUser)

export default router;