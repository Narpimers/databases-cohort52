import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});


export const aggreg = async() => {
    connection.query("SELECT paper_title, COUNT(author_id) AS author_count FROM  research_papers GROUP BY paper_title");
    connection.query("SELECT COUNT(research_papers.paper_id) FROM research_papers INNER JOIN authors on authors.author_id = research_papers.author_id  WHERE authors.gender = 'female'");
    connection.query("SELECT university,  FROM authors GROUP BY university");
    connection.query("SELECT university, COUNT(paper_id) FROM authors GROUP BY university");
    connection.query("SELECT university, MIN(h_index), MAX(h_index) FROM authors GROUP BY university");

};