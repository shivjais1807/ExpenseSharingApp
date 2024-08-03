const path = require("path");
const userRoutes = require("./userRoutes");
const expenseRoutes = require("./expenseRoutes")

module.exports = app => {
    app.use("/api/user",userRoutes);
    app.use("/api/expense",expenseRoutes) ;
};