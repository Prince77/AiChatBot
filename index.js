let express = require('express');
let app = express();
let ejs = require('ejs');
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})