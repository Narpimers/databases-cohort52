// Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and ( fetch all the records in the database)
function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
        `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
        function (err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result[0].name);
        }
    );
}
// we can pass name as ('' OR '1'='1), or code as ('' OR '1'='1)
//  SELECT Population FROM Countries WHERE Name = '' OR '1'='1' and code = '' OR '1'='1';


// Rewrite the function so that it is no longer vulnerable to SQL injection

function getPopulation(Country, name, code, cb) {
    conn.query(
        `SELECT Population FROM ?? WHERE Name = ? AND code = ?`,
        [Country, name, code],
        function (err, result) {
            if (err) return cb(err);
            if (result.length === 0) return cb(new Error("Not found"));
            cb(null, result[0].Population); // исправлено: result[0].name → result[0].Population
        }
    );
}