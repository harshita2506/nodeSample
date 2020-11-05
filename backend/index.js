const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// parse application/json
app.use(bodyParser.json());
app.use(cors());
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root@12345',
  database: 'mydb'
});

//CORS Middleware
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST,OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
});

app.get('/api', (req, res) => {
  res.send({
    message: 'Welcome to JWt Auth',
    status: 200
  })
});

app.post('/api', (req, res) => {
  // Mock user
  const user = {
    username: 'harshita',
    email: 'harshita@gmail.com'
  }
  jwt.sign({
    user
  }, 'secretkey', {
    expiresIn: '10d'
  }, (err, token) => {
    res.json({
      token
    });
  });
});

//show all products
app.get('/products', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, results) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, results) => {
      console.log("results", results);
      if (err) throw err;
      else {
        res.json({
          results
        })
        // res.send(JSON.stringify({
        //     "status": 200,
        //     "error": null,
        //     "response": results
        //   }));
      }
    });
  });
});

//show single product
// app.get('/products/:id', (req, res) => {
//   let sql = "SELECT * FROM product WHERE product_id=" + req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({
//       "status": 200,
//       "error": null,
//       "response": results
//     }));
//   });
// });

//add new product
app.post('/products', (req, res) => {
  let data = {
    product_name: req.body.product_name,
    product_price: req.body.product_price
  };
  jwt.sign({data}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
console.log("ttttt", req.body);
let sql = "INSERT INTO product SET ?";
let query = conn.query(sql, data, (err, results) => {
  if (err) throw err;
  res.send(JSON.stringify({
    "status": 200,
    "error": null,
    "response": results
  }));
});
});


// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
//update product
// app.put('/products/:id', (req, res) => {
//   let sql = "UPDATE product SET product_name='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.params.id;
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({
//       "status": 200,
//       "error": null,
//       "response": results
//     }));
//   });
// });

//Delete product
// app.delete('/products/:id', (req, res) => {
//   let sql = "DELETE FROM product WHERE product_id=" + req.params.id + "";
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({
//       "status": 200,
//       "error": null,
//       "response": results
//     }));
//   });
//  });

//Server listening
app.listen(3000, () => {
  console.log('Server started on port 3000...');
});