const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Chuks");
})

app.listen(9000, () => {
    console.log("App server is listening to port: 9000...")
})
