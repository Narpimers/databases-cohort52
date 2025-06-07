import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});


export const aggreg = async() => {
    connection.query("SELECT rp.paper_id,rp.paper_title, COUNT(ap.author_id) AS number_of_authors FROM   research_papers rp LEFT JOIN  author_papers ap ON rp.paper_id = ap.paper_id GROUP BY   rp.paper_id, rp.paper_title");
    connection.query("SELECT COUNT(ap.paper_id) AS total_papers_by_female_authors FROM  authors a JOIN author_papers ap ON a.author_id = ap.author_id  a.gender = 'female';");
    connection.query("SELECT AVG(h_index) AS avg_h_index FROM authors GROUP BY university");
    connection.query("SELECT a.university, COUNT(ap.paper_id) AS total_papers FROM authors a JOIN author_papers ap ON a.author_id = ap.author_id GROUP BY a.university");
    connection.query("SELECT university, MIN(h_index), MAX(h_index) FROM authors GROUP BY university");
};