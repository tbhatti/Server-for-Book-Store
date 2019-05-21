const mysql = require('mysql')


var connectionsPool = mysql.createPool({
    connectionLimit : 10, // default = 10
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydatabase"
  });

  module.exports = connectionsPool;