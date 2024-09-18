const  Book  = require ("./model");




const addBook = async (req,res) => {
    try {
        // try the thing
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
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

const getBookByAuthor = async (req,res) => {
try{
   const bookbyauthor = await Book.findOne({
    title: req.body.title,
   },
   {
    where: {author: req.body.author}
   }
   );

   res.status(201).json({message: "success", foundbookbyauthor: bookbyauthor});

 } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};








module.exports = {
    addBook,
    getallBooks,
    deleteOneBook,
    updateBookByAuthor,
    getBookByAuthor
   
};