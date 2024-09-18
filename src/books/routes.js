const {Router} = require("express");
const bookRouter = Router();

const { addBook, allBooks, deleteOneBook,updateBookByAuthor, getallBooks, getBookByAuthor } = require("./controllers");



//post:addbook 
bookRouter.post("/books/addbook", addBook);

// get:getallbooks
bookRouter.get("/books/getallbooks", getallBooks);


// delete:deletebookbytitle
bookRouter.delete("/books/deleteonebook",deleteOneBook);


// put:updatebookbyauthor
bookRouter.put("/books/updatebookbyauthor", updateBookByAuthor);

// get: get book by author
bookRouter.get("/books/getbookbyauthor",getBookByAuthor);

// bookRouter.get ("/books/getbookbyauthor", getBookByAuthor)
// post:add author to db

// get: get a single author by author name and retrieve associated book


module.exports = bookRouter;