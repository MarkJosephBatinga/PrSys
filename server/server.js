import cors from "cors";
import express from "express";
import users from "./routes/users.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", users);
app.use("*", (req, res) => res.status(404).json({error: "not Found"}));
 
export default app;