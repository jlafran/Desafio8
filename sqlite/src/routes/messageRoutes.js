import messageController from '../controller/messageController'
const express = require("express");
const messageRouter = express.Router();

messageRouter.post('/',messageController.post)
messageRouter.get("/",messageController.getAll)

export default messageRouter