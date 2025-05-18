const express = require("express");
const router = new express.Router();
const whatsappclient = require("../services/WhatsappClient");
const multer = require("multer");
const upload = multer();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/message", async (req, res) => {
  const { phoneNumber, message } = req.body;
  try {
    await whatsappclient.sendMessage(`91${phoneNumber}@c.us`, message);
    res.json({ status: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send message:", error);
    res
      .status(500)
      .json({ error: "Failed to send message", details: error.message });
  }
});
module.exports = router;
