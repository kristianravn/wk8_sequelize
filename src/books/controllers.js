const  Book  = require ("./model");




const addBook = async (req,res) => {
    try {
       
        const book = await Book.create({
            title: req.body.title,
            authorname: req.body.authorname,
            genrename: req.body.genrename,
            authorId: req.body.authorId,
        });

        res.status(200).json({message: "success", book: book});
    } catch (error){
        // if error then does something
        res.status(500).json({messsage: error.message, error: error});
    }
};


    const getallBooks = async (req,res) => {
        try {
            const books = await Book.findAll();
            res.status(200).json({message: "success", books: books});
        } catch (error) {
            res.status(500).json({message: error.message, error: error });
        }
};


const deleteOneBook = async (req,res) => {
    try {
        const deletedBook = await Book.destroy({
        where: {title: req.body.title}
        });

        if(deletedBook) {
            res.status (202).json({ message: "success",deletedBook: deletedBook});
        } else{
            res.status(404).json({message: "Book not found"});
        }
    } catch (error) {
            res.status(500).json({message: error.message, error: error});
    }

};


const updateBookByAuthor = async (req,res) => {
    try{
        const updated = await Book.update({
            author: req.body.author,
            
        },
        {
            where: {title: req.body.title}
        }
);

   res.status(201).json({message: "success", updatedBook: updated});

 } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};


// getbookbyauthor

const getBookByAuthor = async (req, res) => {
    try {
       const book = await Book.findOne({where: {author: req.params.author} });
       res.status(200).json({message: "success", book: book});
    } catch (error) {
        res.status(500).json({message: error.message, error: error}); 
    }
}

module.exports = {
    addBook: addBook,
    getallBooks:getallBooks,
    deleteOneBook: deleteOneBook,
    updateBookByAuthor:updateBookByAuthor,
    getBookByAuthor:getBookByAuthor,
   
   
};