import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'week2'
});

export const relationships = async () => {
    try {
        await connection.query('USE week2');
        await connection.query(`
      INSERT INTO authors (author_name, university, date_of_birth, h_index, gender) VALUES
      ('Alice Smith', 'MIT', '1980-05-14', 32, 'female'),
      ('Bob Johnson', 'Stanford', '1975-03-22', 40, 'male'),
      ('Carol White', 'Harvard', '1982-07-11', 28, 'female'),
      ('David Brown', 'Cambridge', '1990-01-09', 18, 'male'),
      ('Eve Davis', 'Oxford', '1987-11-29', 35, 'female'),
      ('Frank Miller', 'ETH Zurich', '1978-08-30', 30, 'male'),
      ('Grace Wilson', 'Caltech', '1985-09-20', 25, 'female'),
      ('Henry Moore', 'Princeton', '1991-04-17', 22, 'male'),
      ('Ivy Taylor', 'Yale', '1983-02-13', 27, 'female'),
      ('Jack Anderson', 'Columbia', '1986-06-06', 29, 'male'),
      ('Karen Thomas', 'UCLA', '1979-12-19', 31, 'female'),
      ('Leo Jackson', 'Toronto', '1988-10-23', 19, 'male'),
      ('Mona Lewis', 'TUM', '1993-03-03', 21, 'female'),
      ('Nina Harris', 'Sorbonne', '1990-09-09', 24, 'female'),
      ('Oscar Martin', 'EPFL', '1984-04-04', 33, 'male');
    `);

        await connection.query(`
      INSERT INTO research_papers (paper_title, conference) VALUES
      ('Quantum AI', 'NeurIPS'),
      ('Deep Learning Optimization', 'ICML'),
      ('Neural Graphs', 'CVPR'),
      ('Bioinformatics Trends', 'RECOMB'),
      ('Genetic Algorithms', 'GECCO'),
      ('Quantum Circuits', 'QIP'),
      ('AI in Medicine', 'MedConf'),
      ('Secure ML', 'IEEE S&P'),
      ('Blockchain Systems', 'CryptoCon'),
      ('Data Visualization', 'VIS'),
      ('NLP Advancements', 'ACL'),
      ('Ethics of AI', 'AAAI'),
      ('Robotics Control', 'ICRA'),
      ('Swarm Intelligence', 'ANTS'),
      ('3D Vision', 'SIGGRAPH'),
      ('Cloud Security', 'USENIX'),
      ('Edge Computing', 'EdgeConf'),
      ('IoT Protocols', 'IoTConf'),
      ('Image Compression', 'ICIP'),
      ('Virtual Reality', 'VRConf'),
      ('BioNLP', 'EMNLP'),
      ('AI+Law', 'LAWConf'),
      ('Graph Theory AI', 'NeurIPS'),
      ('Medical Robotics', 'MedConf'),
      ('AI for Education', 'EDM'),
      ('Data Ethics', 'FAT*'),
      ('ML at Scale', 'BigDataConf'),
      ('Vision & Language', 'CVPR'),
      ('Quantum ML', 'QMLConf'),
      ('Adversarial Attacks', 'BlackHat');
    `);

        await connection.query(`
      INSERT INTO author_papers (author_id, paper_id) VALUES
          (6, 8),
          (6, 9),
          (7, 10),
          (8, 11),
          (9, 12),
          (10, 13),
          (10, 14),
          (11, 15),
          (12, 16),
          (12, 17),
          (13, 18),
          (14, 19),
          (14, 20),
          (15, 21),
          (15, 22),
          (5, 23),
          (7, 24),
          (8, 25),
          (9, 26),
          (11, 27),
          (13, 28),
          (2, 29),
          (4, 30);
    `);

        console.log('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        await connection.end();
    }
};