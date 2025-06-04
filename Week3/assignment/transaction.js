import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password : 'hyfpassword',
});

try {
    await connection.query(`USE Transactions`)
    await connection.query(`START TRANSACTION`);
    await connection.query(`UPDATE account SET balance = balance - 1000 WHERE account_number = 1001`);
    await connection.query(`UPDATE account SET balance = balance + 1000 WHERE account_number = 1002`);
    await connection.query(`
        INSERT INTO account_changes(account_number, amount, changed_date, remark)
        VALUES
            (1001, -1000, '2020-01-01', 'transaction'),
            (1002, 1000, '2020-01-02', 'deposit')
    `);
    await connection.query(`COMMIT`);
} catch (err) {
    console.log(err);
} finally {
    connection.end();
}