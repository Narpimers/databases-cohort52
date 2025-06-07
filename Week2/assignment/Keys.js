import mysql from 'mysql2/promise';
import {relationships} from "./Relationships.js";
import {aggreg} from "./Aggregate-Functions.js";

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week2'
});

try {
    await connection.query('DROP DATABASE IF EXISTS week2');
    await connection.query('CREATE DATABASE IF NOT EXISTS week2');
    await connection.query('USE week2');

    await connection.query(
        `CREATE TABLE IF NOT EXISTS authors (
            author_id INT AUTO_INCREMENT PRIMARY KEY,
            author_name VARCHAR(50) NOT NULL,
            university VARCHAR(50),
            date_of_birth DATE NOT NULL,
            h_index INT NOT NULL,
            mentor INT,
            gender ENUM('male', 'female', 'other'),
            FOREIGN KEY (mentor) REFERENCES authors(author_id)
        )`
    );

    await connection.query(
        `CREATE TABLE IF NOT EXISTS research_papers (
            paper_id INT AUTO_INCREMENT PRIMARY KEY,
            paper_title VARCHAR(100) NOT NULL,
            conference TEXT
        )`
    );

    await connection.query(
        `CREATE TABLE IF NOT EXISTS author_papers (
            author_id INT,
            paper_id INT,
            PRIMARY KEY (author_id, paper_id),
            FOREIGN KEY (author_id) REFERENCES authors(author_id),
            FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id)
        )`
    );

    relationships();
    console.log('Tables created successfully!');
} catch (error) {
    console.error('Error creating tables:', error);
} finally {
    await connection.end();
}











