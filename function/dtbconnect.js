const mysql = require('mysql2');

exports.handler = async (event) => {
    const connection = mysql.createConnection({
        host: 'myvotingdatabse.coispubgurww.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'Rachelle20022004$',
        database: 'votingdatas',
    });

    try {
        const { email, age, sex, eth, party, state } = JSON.parse(event.body);

        const sql = 'INSERT INTO votersdata (email, age, sex, ethnicity, party, state) VALUES (?, ?, ?, ?, ?, ?)';

        await connection.promise().execute(sql, [email, age, sex, eth, party, state]);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data inserted successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    } finally {
        connection.end();
    }
};
