const mysql = require('mysql2/promise');

const app = {}

app.init = async () => {
    // prisijungti prie duomenu bazes
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'mushroom',
    });

    let sql = '';
    let rows = [];


    sql = 'SELECT * FROM `friends`';
    [rows] = await connection.execute(sql);


    console.log(rows);

}

app.init();

module.exports = app;