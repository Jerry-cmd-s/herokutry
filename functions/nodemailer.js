const nodemailer = require('nodemailer')

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
                    res.send('Email sent successfully');
                }
            });
        })
        .catch((error) => {
            console.error('Failed to save data:', error);
            res.status(500).send('Failed to save data');
        });
});
