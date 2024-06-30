import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage); //protectRoute  - protect this route before you run this function(sendMessage) basically authorization


export default router;