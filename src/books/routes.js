const {Router} = require("express");
const bookRouter = Router();

const { addBook, allbooks } = require("./controllers");



//addbook 
bookRouter.post("/books/addBook", addBook);

// getallbooks
bookRouter.get("/books/allbooks", allbooks);


// deletebookbytitle

// updateBookbyauthor


module.exports = bookRouter;