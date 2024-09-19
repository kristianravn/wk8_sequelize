const {DataTypes} = require("sequelize");

const sequelize = require("../db/connection");

const Author= sequelize.define(
"author",
{
    name: {
        type: DataTypes.STRING,
        defaultValue: "written by some author",
    },
})

module.exports = Author;