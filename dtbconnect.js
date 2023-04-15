const mysql = require('mysql2')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

//lets create an express intance
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// specify the port number

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5501;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // log the port number
});


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jerry20022004&",
    database: "votingresult"
});

connection.connect((error) => {
    if (error)

        console.error('Error connecting to database:', error);



    //console.log('succesfully connected')
    app.post('/form', (req, res) => {
        const email = req.body.email
        const age = req.body.age
        const sex = req.body.sex
        const eth = req.body.eth
        const party = req.body.party
        const state = req.body.state


        const sql = 'INSERT INTO user_infos (email, age,ethnicity,sex,party,state)VALUES (?,?,?,?,?,?)'

        connection.query(sql, [email, age, eth, sex, party, state], (error, results, fields) => {
            if (error) throw error
            res.send('Data inserted succesfully')
        })


    })



})
