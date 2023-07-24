/* ./model/User.js */
const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user_name',
    password: 'password',
    database: 'database_name'
});
