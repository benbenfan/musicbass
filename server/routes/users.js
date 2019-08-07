var express = require('express');
var router = express.Router();

const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'@Frontier11',
  database:'music'
});

function buildConditions(params) {
  var conditions = [];
  var values = [];
  var conditionsStr;

  if (typeof params.name !== 'undefined') {
    conditions.push("name LIKE ?");
    values.push("'%" + params.name + "%'");
    console.log('name passes' + params.name);
  }

  if (typeof params.id !== 'undefined') {
    conditions.push("id = ?");
    console.log('id passes');
    values.push(parseInt(params.id));
  }

  return {
    where: conditions.length ?
             conditions.join(' AND ') : '1 = 1',
    values: values
  };
}

function recomend(params) {
  var value = 0;
  if (!Number.isInteger(parseInt(params.name)) || parseInt(params) === 'NaN'){
    console.log('NaN: ' + params.name)
  } else if (parseInt(params.name) > 5){
    console.log('Out of bounds: ' + params.name)
  } else {
    value = parseInt(params.name);
  }
  return value;
}

// /* GET  listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with data');
// });
router.all('/', function(req, res, next) {
  // console.log('Request URL:', req.originalUrl);
  // console.log('Request Type:', req.method);
  // res.send("tagId is set to " + req.params.tagId)

  var postData = req.body;
  console.log('postData: ' + JSON.stringify(req.body));
  var conditions = buildConditions(postData);
  var sql = 'SELECT * FROM artist WHERE ' + conditions.where;
  console.log(sql + conditions.values);
  var queries = ["SELECT * FROM artist WHERE name LIKE '%bonnie%'", 'SELECT * FROM artist limit 20;']
 
  const advQueries = [
    // 1. find songs in best selling album
    "SELECT s.name FROM Song s JOIN Album a ON s.album_ID=a.album_ID " +
    "WHERE a.salesNumber IN (SElECT MAX(a2.salesNumber) FROM Album a2);",

    // 2. find songs with highest rating which is rock genre
    "SELECT s.name FROM Song " +
    "WHERE s.rock = 1 AND s.rating IN (" +
    "SELECT MAX(s2.rating) "+ 
    "FROM Song s2 );",

    // 3. find songs performed by most popular musician (highest number of tophits)

    "SELECT DISTINCT s.name "+
    "FROM Song s JOIN PerformedBy p ON s.song_ID=p.song_ID JOIN Artist a on p.name=a.name " +
    " WHERE a.tophits = ( " +
    " SElECT MAX(tophits) " +
    " FROM Artist a2 );",
    

    // 4. find songs performed by experiend musician (who performed the most number of songs)
    "WITH ArtistSongCount AS(SELECT p.name name, COUNT(p.song_ID) count " +
    "FROM PerformedBy p GROUP BY p.name)" +
    "SELECT s.name FROM Song s JOIN PerformedBy p ON s.song_ID=p.song_ID " +
    "WHERE p.name IN ( SELECT a1.name FROM ArtistSongCount a1 " +
    "WHERE count >= ALL(SELECT a2.count FROM ArtistSongCount a2));",

    // 5. find songs produced by company with the greatest number of signed artists
    "SELECT s.name " +
    "FROM Song s JOIN Album a ON s.album_ID=a.album_ID " +
            "JOIN ProducedBy p ON a.album_ID=p.album_ID " +
            "JOIN Company c ON p.company_Name=c.name " +
    "WHERE c.signedArtists IN ( " +
    "SElECT MAX(c2.signedArtists) " +
    "FROM Company c2);"

  ]
  var option = recomend(req.body)
 
  // connection.query(sql, conditions.values, function (error, results, fields) {
  connection.query(queries[option], function (error, results, fields) {
    if (error){
      res.send(error);
      res.end(JSON.stringify(results));
      throw error;
    }
    // res.send({users:results});
    res.json({users:results});
    // res.send({users:results});
    results.forEach(result => {
        // console.log(result);
    });
  });   
});

module.exports = router;
