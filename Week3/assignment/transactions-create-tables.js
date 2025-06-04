import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password : 'hyfpassword',
});

try {
    await  connection.query(`DROP DATABASE IF EXISTS Transactions`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS Transactions`);
    await connection.query(`USE Transactions`)
    await  connection.query(`CREATE TABLE IF NOT EXISTS account(
        account_number INT  AUTO_INCREMENT PRIMARY KEY,
        balance INT NOT NULL DEFAULT 0)`
   );

   await  connection.query(`CREATE TABLE IF NOT EXISTS account_changes(
    change_number INT AUTO_INCREMENT PRIMARY KEY,
    account_number INT,
    amount INT, 
    changed_date DATETIME,
    remark TEXT,
    FOREIGN KEY (account_number) REFERENCES account(account_number))`
   );
} catch (err) {
    console.log(err);
} finally {
    connection.end();
}