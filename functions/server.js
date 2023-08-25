// server.js
const { Client, connectToDB, createGraph } = require("./db");
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
const fs = require('fs');
const distpath = path.join(__dirname, '../dist');
app.use(express.static(distpath))


connectToDB()
  .then(() => {
    app.listen(3000, '192.168.1.226', () => {
      console.log('Server on port 3000 on the ip address 192.168.1.226');


    })

  }).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });


////routes---------------

app.get('/index.html', (req, res) => {
  //res.sendFile(path.join(__dirname, '../dist', 'index.html'))
  const files = fs.readdirSync(distpath);
  res.send(files);
});




////route---------------

app.post("/clientdatas", function (req, res) {
  let newUsers = new Client({
    email: req.body.email,
    age: req.body.age,
    sex: req.body.sex,
    eth: req.body.eth,
    party: req.body.party,
    state: req.body.state,
  });
  newUsers.save()
    .then(() => {

      const transporter = nodemailer.createTransport(

        {
          service: 'hotmail',
          auth: {
            user: 'apptrial01@outlook.com',
            pass: 'Create20042004$'
          }
        }
      )

      const emailContent = `
      <html>
        <head>
          <style>
            /* Add your CSS styles here */
          </style>
        </head>
        <body>
          <h1>Thank you for submitting the form</h1>
          <p>We received your data. Thank you!</p>
          <p>Here are the details:</p>
          <ul>
            <li>Email: ${req.body.email}</li>
            <li>Age: ${req.body.age}</li>
            <li>Sex: ${req.body.sex}</li>
            <li>Ethnicity: ${req.body.eth}</li>
            <li>Political Party: ${req.body.party}</li>
            <li>State: ${req.body.state}</li>
          </ul>
          <p>If you want to see how we will use you datas ,click here</p>
        </body>
      </html>
    `;

      const mailOptions = {
        from: 'apptrial01@outlook.com',
        to: req.body.email,
        subject: 'Thank you for submitting the form',
        html: emailContent,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Failed to send email:', error);
          res.status(500).send('Failed to send email');
        } else {
          console.log('Email sent:', info.response);
          res.redirect('/chart.html');
        }
      });
    })
    .catch((error) => {
      console.error('Failed to save data:', error);
      res.status(500).send('Failed to save data');
    });
});

////route---------------




app.get("/getchartdata", async (req, res) => {
  try {
    const { whitecount, blackcount, spanishcount, femalecount, malecount, democratcount, republiccount } = await connectToDB();
    res.json({ whitecount, blackcount, spanishcount, femalecount, malecount, democratcount, republiccount });
    console.log("datas has been received")
  } catch (error) {
    console.error('Failed to fetch data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})












