const express = require("express");
const router = new express.Router();
const whatsappclient = require("../services/WhatsappClient");
const multer = require("multer");
const upload = multer();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/message", upload.single("file"), (req, res) => {
  whatsappclient.sendMessage("918527878887@c.us", "hii");
  res.send("mssg");
});

module.exports = router;
