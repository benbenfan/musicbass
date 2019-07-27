// using express module of node to route to database
const express = require('express');
//set port to 3000 or let auto process port
const PORT = process.env.PORT || 3000;
// initialize express
const app = express();
// require mysql in node modules
const mysql = require('mysql');

const connection = mysql.creatConnection({
    host: 'localhost',
    user: 'root',
    password:'@Frontier11',
    database:'university'
});

connection.connect(function(err){
    (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

require('./serviceWorker.js')(app,connection);
// server start
app.listen(PORT, () => {
    console.log('Musicbass is on port ${PORT}');
});