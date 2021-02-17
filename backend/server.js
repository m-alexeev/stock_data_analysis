const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http:localhost:8081"
}

app.use(cors(corsOptions));

//Json request parsing 
app.use(bodyParser.json());

//basic route 
app.get("/", (req,res) => {
    res.json({message: "Stock fetcher backend"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})