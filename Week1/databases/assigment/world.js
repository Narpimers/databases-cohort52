import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

connection.connect();

try {
    await connection.query('USE new_world');
    // What are the names of countries with population greater than 8 million 
    await connection.query('SELECT name FROM country WHERE population > 8000000');
    // What are the names of countries that have “land” in their names?
    await connection.query('SELECT name FROM country WHERE name LIKE "%land%"');
    // What are the names of the cities with population in between 500,000 and 1 million?
    await connection.query('SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000');
    // What's the name of all the countries on the continent ‘Europe’?
    await connection.query('SELECT name FROM country WHERE Continent = "Europe"');
    // List all the countries in the descending order of their surface areas.
    await connection.query('SELECT name FROM country ORDER BY SurfaceArea DESC');
    // What are the names of all the cities in the Netherlands?
    await connection.query('SELECT name FROM city WHERE CountryCode = "NLD"');
    // What is the population of Rotterdam?
    await connection.query('SELECT name, Population FROM city WHERE name = "Rotterdam"');
    // What's the top 10 countries by Surface Area?
    await connection.query('SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10');
    // What's the top 10 most populated cities?
    await connection.query('SELECT name, Population FROM city ORDER BY population DESC LIMIT 10');
    // What is the population number of the world?
    await connection.query('SELECT SUM(Population) FROM country');

} catch (error) {
    console.error(error);
}

connection.end();