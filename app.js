require('dotenv').config();

const app = require('express')();
const config = require('./config');

app.get("", (req, res) => {
    res.send("HELLO WORLD");
});

app.listen(config.PORT, () => {
    console.log(`Listening on PORT ${config.PORT}`);
});