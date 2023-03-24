import express from "express";
import UsersController from "../controllers/users.controller.js";

const router = express.Router();

router.route("/email/").get(UsersController.apiGetUsersByEmail);

router.route("/")
    // .get(UsersCtrl.apiGetUsers)
    .post(UsersController.apiPostUser)
    // .put(UsersCtrl.apiPutUser)
    // .delete(UsersCtrl.apiDeleteUser)

export default router;