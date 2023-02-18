const mysql = require('mysql2');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

//exports.handler = function (event, context, callback) {
const connection = mysql.createConnection({
    host: "127.0.0.1",
    username: "root",
    password: "",
    dbname: "votinginfos"
});


//};
//Submission of the form
//const form = document.getElementById('form');
//form.addEventListener('submit', function (event) {
// event.preventDefault();

app.post('/form', (req, res) => {
    const email = req.body.email;
    const age = req.body.age;
    const ethnicity = req.body.eth;
    const sex = req.body.sex;
    const party = req.body.party;
    const state = req.body.st;







    const sql = `INSERT INTO votersdata (email, age,ethnicity,sex,party,state ) VALUES ('${email}', '${age}', '${ethnicity},'${sex}','${party}','${state}')`;


    connection.query(sql, (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error });
        }

        return res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
