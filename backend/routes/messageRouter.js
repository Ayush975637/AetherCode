const express = require("express");
const messageRouter = express.Router();

// Local Module
const messageController = require("../controllers/messageControllers");


messageRouter.post("/", messageController.postmessage);

module.exports = messageRouter;
