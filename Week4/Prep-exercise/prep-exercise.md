const { MongoClient } = require('mongodb');

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company'
});

const mongo = new MongoClient('mongodb://localhost:27017');

try {
    await mongo.connect();
} catch (error) {
    console.error(error);
    
} finally {
    mongo.close();
};