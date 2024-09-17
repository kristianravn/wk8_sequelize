const Book = require ("./model");
const allBooks = require("./model");




const addBook = async (req,res) => {
    try {
        // try the thing
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        });



        res.status(201).json({message: "success", book: book});
    } catch (error){
        // if error then does something
        res.status(500).json({messsage: error.message, error: error});
    }
};

    const allbooks = async (req,res) => {
        try {
            const books = await Book.findAll();
            res.status(201).json({message: "success", books: books});
        } catch (error) {
            res.status(500).json({message: error.message, error: error });
        }
};

module.exports = {
    addBook,
    allbooks,
};