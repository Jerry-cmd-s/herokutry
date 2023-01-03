

const mysql = require('msql')



exports.handler = async (event, context) => {
    const connection = mysql.createconnection({
        host: "myvotingdatabse.coispubgurww.us-east-1.rds.amazonaws.com",
        username: "admin",
        password: "Dsafdfwr3r3e3e3edds2#",
        dbname: "myvotingdatabse"

    });
    connection.connect(function (err) {
        if (err) throw err;
        console.log('CONNECTED');
    });







    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello world" }),
    };


};