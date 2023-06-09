const mysql = require('mysql2');

exports.handler = async (event) => {
    const connection = mysql.createConnection({
        host: 'elvish-cow-4060.g8z.cockroachlabs.cloud',
        user: 'jerrycami',
        password: 'tOMLDsvMX2Kile2fq4SpRQ',
        database: 'clientdtb',
        port: '26257'
    });

    try {
        await new Promise((resolve, reject) => {
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

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