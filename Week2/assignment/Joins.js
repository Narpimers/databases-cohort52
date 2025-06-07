import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

export const joins = async() => {
    connection.query("SELECT author_name, mentor FROM authors");
    connection.query("SELECT authors.author_name,  research_papers.paper_title FROM authors LEFT JOIN author_papers ON authors.author_id =  author_papers. author_id LEFT JOIN research_papers ON research_papers.paper_id = author_papers.paper_id");
};