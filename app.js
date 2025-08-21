const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Chuks");
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log("App server is listening to port: 9000...")
})
