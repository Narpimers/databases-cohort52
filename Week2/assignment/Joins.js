import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

export const joins = async() => {
    connection.query("SELECT author_name, mentor FROM authors");
    connection.query("SELECT authors.author_name, research_papers.paper_title FROM authors LEFT JOIN research_papers ON authors.author_id =  research_papers. author_id");
};