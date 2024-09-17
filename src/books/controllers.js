const Book = require ("./model");





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

module.exports = {
    addBook: addBook,
};