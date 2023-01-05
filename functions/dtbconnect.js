

const mysql = require('msql');



exports.handler = async (event, context) => {
    const connection = mysql.createconnection({
        host: "myvotingdatabse.coispubgurww.us-east-1.rds.amazonaws.com",
        username: "admin",
        password: "Dsafdfwr3r3e3e3edds2#",
        dbname: "myvotingdatabse"
    });
    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting to the database' + err.stack);
            return;
        }

        console.log("Succesfully connected" + connection.threadId);
    });

    connection.end();










};