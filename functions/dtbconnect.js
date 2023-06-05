const mysql = require('mysql2');

exports.handler = async (event) => {
    const connection = mysql.createConnection({
        host: 'sql112.epizy.com',
        user: 'epiz_34350910',
        password: 'yyS3X8sT3S',
        database: 'epiz_34350910_h',
    });

    try {
        await connection.connect();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Connected to the database' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to connect to the database' }),
        };
    } finally {
        connection.end();
    }
};