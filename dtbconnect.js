const mysql = require('mysql2')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

//lets create an express intance
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// specify the port number

app.use(express.static(path.join(__dirname, 'public')));




const connection = mysql.createConnection({
    host: "myvotingdatabse.coispubgurww.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Rachelle20022004$",
    database: "myvotingdatabse"
});

//If i wanted to connect on to my local database
//const connection = mysql.createConnection({
//  host: "localhost",
// user: "root",
// password: "Jerry20022004&",
// database: "votingresult"
//});



connection.connect((error) => {
    if (error)

        console.error('Error connecting to database:', error);





    app.post('/form', (req, res) => {
        const email = req.body.email
        const age = req.body.age
        const sex = req.body.sex
        const eth = req.body.eth
        const party = req.body.party
        const state = req.body.state


        const sql = 'INSERT INTO votersdata (email, age,ethnicity,sex,party,state)VALUES (?,?,?,?,?,?)'

        connection.query(sql, [email, age, eth, sex, party, state], (error, results, fields) => {
            if (error) throw error
            res.send('Data inserted succesfully')
        })


    })



})




