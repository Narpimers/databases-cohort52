import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

export const relationships = async() => {

    await connection.query(`
    CREATE TABLE IF NOT EXISTS research_papers (
        paper_id INT AUTO_INCREMENT PRIMARY KEY,
        paper_title VARCHAR(100) NOT NULL,
        conference TEXT,
        author_id INT,
        FOREIGN KEY (author_id) REFERENCES authors(author_id)
    )`);


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
        ('Oscar Martin', 'EPFL', '1984-04-04', 33, 'male')
    `);

    await connection.query(
        `INSERT INTO research_Papers (paper_title, conference, publish_date, author_id) VALUES 
        ('Quantum AI', 'NeurIPS', '2020-12-01', 1),
        ('Deep Learning Optimization', 'ICML', '2021-07-10', 1),
        ('Neural Graphs', 'CVPR', '2019-06-15', 2),
        ('Bioinformatics Trends', 'RECOMB', '2022-04-03', 3),
        ('Genetic Algorithms', 'GECCO', '2018-07-28', 3),
        ('Quantum Circuits', 'QIP', '2020-01-20', 4),
        ('AI in Medicine', 'MedConf', '2021-11-12', 5),
        ('Secure ML', 'IEEE S&P', '2022-05-06', 6),
        ('Blockchain Systems', 'CryptoCon', '2019-08-08', 6),
        ('Data Visualization', 'VIS', '2020-10-15', 7),
        ('NLP Advancements', 'ACL', '2021-08-20', 8),
        ('Ethics of AI', 'AAAI', '2020-02-14', 9),
        ('Robotics Control', 'ICRA', '2018-05-30', 10),
        ('Swarm Intelligence', 'ANTS', '2021-09-01', 10),
        ('3D Vision', 'SIGGRAPH', '2019-07-15', 11),
        ('Cloud Security', 'USENIX', '2022-01-10', 12),
        ('Edge Computing', 'EdgeConf', '2021-03-22', 12),
        ('IoT Protocols', 'IoTConf', '2020-06-13', 13),
        ('Image Compression', 'ICIP', '2019-09-09', 14),
        ('Virtual Reality', 'VRConf', '2021-12-05', 14),
        ('BioNLP', 'EMNLP', '2019-11-11', 15),
        ('AI+Law', 'LAWConf', '2022-02-18', 15),
        ('Graph Theory AI', 'NeurIPS', '2021-07-07', 5),
        ('Medical Robotics', 'MedConf', '2022-03-04', 7),
        ('AI for Education', 'EDM', '2020-04-20', 8),
        ('Data Ethics', 'FAT*', '2019-05-25', 9),
        ('ML at Scale', 'BigDataConf', '2021-10-30', 11),
        ('Vision & Language', 'CVPR', '2022-06-01', 13),
        ('Quantum ML', 'QMLConf', '2020-12-12', 2),
        ('Adversarial Attacks', 'BlackHat', '2021-01-09', 4)`);
}