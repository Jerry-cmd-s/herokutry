// db.js
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const chart = require('chart.js')
const mongoose = require("mongoose");
const password = 'IlAf8L65aJBSbFHw';


const uri = `mongodb+srv://jerrycamijeanbaptiste:${password}@cluster0.q1tyunk.mongodb.net/userinfos?retryWrites=true&w=majority`; // Replace with your MongoDB connection URI
//let check = false

async function connectToDB() {
  try {

    await mongoose.connect(uri);


    // Retrieve data from MongoDB using the Client model
    console.log("Connected to Database")
    const data = await Client.find({}).lean();


    let republiccount = 0
    let democratcount = 0
    let malecount = 0
    let femalecount = 0
    let blackcount = 0
    let spanishcount = 0
    let whitecount = 0


    data.forEach((entry) => {
      if (entry.party === 'Republican') {
        republiccount++;
      } else if (entry.party === 'Democratic') {
        democratcount++;
      }

    });



    data.forEach((entry) => {
      if (entry.sex === 'M') {
        malecount++
      }
      else if (entry.sex === 'F') {
        femalecount++
      }


    })
    data.forEach((entry) => {
      if (entry.eth === 'White') {
        whitecount++
      }
      else if (entry.eth === 'Black') {
        blackcount++
      }
      else if (entry.eth === 'Spanish') {
        spanishcount++
      }
    }



    )

    console.log({ femalecount })
    console.log({ malecount })
    console.log({ democratcount })
    console.log({ republiccount })
    console.log({ whitecount })
    console.log({ blackcount })
    console.log({ spanishcount })

    return { whitecount, blackcount, spanishcount, democratcount, republiccount, femalecount, malecount };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }


}




//CREATE SCHEMA FOR THE DOCUMENT 
const clientschema = {
  email: String,
  age: String,
  sex: String,
  eth: String,
  party: String,
  state: String,

};



const Client = mongoose.model("Client", clientschema);



//connectToDB()

module.exports = { Client, connectToDB }



