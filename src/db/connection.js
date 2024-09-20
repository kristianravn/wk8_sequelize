const {Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    pool: {
        max:5,
        min:0,
        // 30,000 is 30 seconds in code same for 10,000 is 10 seconds
        acquire: 30000,
        idle: 10000,
    },
});

sequelize.authenticate();

console.log("DB connection is working");

module.exports = sequelize;
