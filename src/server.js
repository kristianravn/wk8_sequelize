require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.get("/health", (req, res) =>{
    res.status(200).json({message: "api is healthy"});
});

app.listen(5001, () =>{
    console.log(`servser is listening on port ${port}`);
});
