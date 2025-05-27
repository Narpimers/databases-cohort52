import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

connection.connect();

try {
    await connection.query('CREATE DATABASE IF NOT EXISTS meetup');
    await connection.query('USE meetup');
    await connection.query('CREATE TABLE Invitee (invitee_no INT PRIMARY KEY AUTO_INCREMENT, invitee_name VARCHAR(25) NOT NULL, invited_by VARCHAR(25))');
    await connection.query('CREATE TABLE Room (room_no INT PRIMARY KEY AUTO_INCREMENT, room_name VARCHAR(25) NOT NULL, floor_number TINYINT NOT NULL)');
    await connection.query('CREATE TABLE Meeting (meeting_no INT PRIMARY KEY AUTO_INCREMENT, meeting_title VARCHAR(40) NOT NULL, staring_time DATETIME, ending_time DATETIME, room_no INT NOT NULL)');

    await connection.query('INSERT INTO Invitee VALUES (1, "Ilias Khugaev", "Ilia Bubnov")');
    await connection.query('INSERT INTO Invitee VALUES (2, "Anna Petrova", "Ilias Khugaev")');
    await connection.query('INSERT INTO Invitee VALUES (3, "Dmitry Sokolov", "Anna Petrova")');
    await connection.query('INSERT INTO Invitee VALUES (4, "Maria Ivanova", "Dmitry Sokolov")');
    await connection.query('INSERT INTO Invitee VALUES (5, "Oleg Smirnov", "Maria Ivanova")');

    await connection.query('INSERT INTO Room VALUES (1, "Orion", 1)');
    await connection.query('INSERT INTO Room VALUES (2, "Pegasus", 1)');
    await connection.query('INSERT INTO Room VALUES (3, "Centauri", 2)');
    await connection.query('INSERT INTO Room VALUES (4, "Andromeda", 2)');
    await connection.query('INSERT INTO Room VALUES (5, "Phoenix", 3)');

    await connection.query('INSERT INTO Meeting VALUES (1, "Project Kickoff", "2025-05-21 09:00:00", "2025-05-21 10:00:00", 1)');
    await connection.query('INSERT INTO Meeting VALUES (2, "Design Review", "2025-05-21 10:30:00", "2025-05-21 11:30:00", 2)');
    await connection.query('INSERT INTO Meeting VALUES (3, "Sprint Planning", "2025-05-21 12:00:00", "2025-05-21 13:00:00", 3)');
    await connection.query('INSERT INTO Meeting VALUES (4, "Client Sync", "2025-05-21 14:00:00", "2025-05-21 15:00:00", 4)');
    await connection.query('INSERT INTO Meeting VALUES (5, "Retrospective", "2025-05-21 16:00:00", "2025-05-21 17:00:00", 5)');

} catch (error) {
    console.log(error);
}

connection.end();