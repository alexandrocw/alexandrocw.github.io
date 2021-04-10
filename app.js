require('dotenv').config();

const express = require('express');
const app = express();
const config = require('./config');
const path = require('path');

app.use("/assets", express.static(path.join(__dirname + "/assets")));

app.get("", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(config.PORT, () => {
    console.log(`Listening on PORT ${config.PORT}`);
});