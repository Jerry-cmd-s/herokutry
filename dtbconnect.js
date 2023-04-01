const http = require('http')
const express = require('express')
//create an instance of express 
const port = 8080;
const app = express();




//API MIDDLEWARE

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))


//API ROUTES

app.get('/', (req, res) => {

    res.status(200).send('<h1> Hellooooo sir</h1>')
})

app.post('/form', (req, res) => {
    const formdata = req.body
})








app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})



