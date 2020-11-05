var mysql = require('mysql');
const dbConfig = require('./config/db.config');

var con = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM customers" , function (err, result, fields) {
	  if(err) throw err;
	  console.log(result);
  });
});