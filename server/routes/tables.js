var express = require('express');
var router = express.Router();

const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Frontier11',
  database: 'music'
});

function buildQuery(params) {
  var str = "describe ";
  if (typeof params.name !== 'undefined') {
    str += params.name;
  } else {
    // purposefully prevent any data when input is invalid
    str = "describe album;"
  }
  console.log(str);
  return str;
}

router.all('/', function (req, res, next) {
  var postData = req.body;
  var query = buildQuery(postData);
  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(error);
      throw error;
    }
    // res.send({users:results});
    res.json({ users: results });
    // res.send({users:results});
    results.forEach(result => {
    //   console.log(result);
    });
  });
});

module.exports = router;
