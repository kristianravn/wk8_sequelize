const {Router} = require("express");
const authorRouter = Router();

const { addAuthor,getallAuthors} = require("./controllers");





authorRouter.post("/authors/addAuthor", addAuthor);
authorRouter.get("/authors/getallAuthors/:name", getallAuthors);


module.exports = authorRouter