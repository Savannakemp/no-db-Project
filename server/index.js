const express = require('express')
const bodyParser =require('body-parser')
const app = express();
const port = 8005

app.use(bodyParser.json())

app.listen(port, () => {
    console.log("lisitening on port", port);
})