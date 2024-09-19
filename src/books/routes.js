const {Router} = require("express");
const bookRouter = Router();

const { addBook, deleteOneBook,updateBookByAuthor, getallBooks,getBookByAuthor} = require("./controllers");



//post:addbook 
bookRouter.post("/books/addbook", addBook);

// get:getallbooks
bookRouter.get("/books/getallbooks", getallBooks);


// delete:deletebookbytitle
bookRouter.delete("/books/deleteonebook",deleteOneBook);


// put:updatebookbyauthor
bookRouter.put("/books/updatebookbyauthor", updateBookByAuthor);


// get book by author

bookRouter.get("/books/getbookbyauthor/:author", getBookByAuthor);





module.exports = bookRouter;