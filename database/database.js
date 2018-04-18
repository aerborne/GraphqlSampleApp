const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samplegraphql'
})

const model = {
    getAllUsers: (callback)=>{
        connection.query('SELECT * FROM users', (error, results, fields) => {
            return callback(results)
        });
    }
}

module.exports = model;
