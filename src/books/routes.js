const {Router} = require("express");
const bookRouter = Router();

const { addBook, allBooks, deleteOneBook,updateBookByAuthor } = require("./controllers");



//addbook 
bookRouter.post("/books/addbook", addBook);

// getallbooks
bookRouter.get("/books/allbooks", allBooks);


// deletebookbytitle
bookRouter.delete("/books/deleteonebook",deleteOneBook);


// updatebookbyauthor
bookRouter.put("/books/updatebookbyauthor", updateBookByAuthor);

module.exports = bookRouter;