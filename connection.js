var mysql = require('mysql');

const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((err, res) => {
    if(err) throw err;
    console.log('mysql connection established');
});

module.exports = conn;