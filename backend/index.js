const express = require("express");
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

// Statics
app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3000`)
})