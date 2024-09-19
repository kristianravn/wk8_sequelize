const  Author  = require ("./model");




const addAuthor = async (req,res) => {
    try {
        // try the thing
        const author = await Author.create({
            name: req.body.name,
           
           
        });

        res.status(200).json({message: "success", author: author});
    } catch (error){
        // if error then does something
        res.status(500).json({messsage: error.message, error: error});
    }
};


module.exports = {
    addAuthor: addAuthor,
   
   
};