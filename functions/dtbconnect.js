const mysql = require('mysql2');

exports.handler = async (event) => {
    const connection = mysql.createConnection({
        host: 'sql112.epizy.com',
        user: 'epiz_34350910',
        password: 'yyS3X8sT3S',
        database: 'epiz_34350910_h',
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
            body: JSON.stringify({ error: 'Error inserting data' }),
        };
    } finally {
        connection.end();
    }
};
