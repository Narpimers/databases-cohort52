import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password : 'hyfpassword',
});

try {
    await  connection.query(`USE Transactions`);
    await connection.query(`INSERT INTO account(account_number, balance)
        VALUES (1001, 5000), 
               (1002, 3000),
               (1003, 7000)`
    );
    await  connection.query(`INSERT INTO account_changes(account_number, amount, changed_date, remark)
    VALUES (1001, 1000, '2020-01-01', 'Initial deposit'), 
           (1002, -1000, '2020-01-02', 'Initial deposit'),
           (1003, 1000, '2020-01-03', 'Initial deposit')`
    );
} catch (err) {
    console.log(err);
} finally {
    connection.end();
}