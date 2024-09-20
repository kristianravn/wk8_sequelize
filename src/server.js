require("dotenv").config();
const express = require("express");

const bookRouter = require("./books/routes");
const Book = require("./books/model");

const authorRouter = require("./authors/routes");
const Author = require("./authors/model");


const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(bookRouter);
app.use(authorRouter);

const syncTables = () =>{
    Author.hasMany(Book);
    Book.belongsTo(Author);

    
    Author.sync({alter:true});
    Book.sync({alter: true});
   
    
};


app.get("/health", (req, res) =>{
    res.status(200).json({message: "api is healthy"});
});

app.listen(port, () =>{
    syncTables ();
    console.log(`servser is listening on port ${port}`);
});



