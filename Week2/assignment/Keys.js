import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

try {
    await connection.query('CREATE DATABASE IF NOT EXISTS week2');
    await connection.query('USE week2');

    await connection.query(`
    CREATE TABLE IF NOT EXISTS authors (
        author_id INT AUTO_INCREMENT PRIMARY KEY,
        author_name VARCHAR(50) NOT NULL,
        university TEXT,
        date_of_birth DATE NOT NULL,
        h_index INT NOT NULL,
        paper_id INT,
        mentor INT,
        gender ENUM("male","female","other"),
        FOREIGN KEY (mentor) REFERENCES authors(author_id)
    )`);


} catch (error) {
    console.error(error);
}

connection.end();