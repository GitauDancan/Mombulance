const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mombulance',
    connectionLimit: 10
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log('Connected');
    }

})
module.export = connection;