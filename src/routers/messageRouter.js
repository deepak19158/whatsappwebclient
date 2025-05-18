const express = require("express");
const router = new express.Router();
const whatsappclient = require("../services/WhatsappClient");
const multer = require("multer");
const upload = multer();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/message", upload.single("file"), (req, res) => {
  const { phoneNumber, message } = req.body;
  whatsappclient.sendMessage(`91${phoneNumber}@c.us`, message);
  res.send("mssg");
});

module.exports = router;
