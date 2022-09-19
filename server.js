// Setup empty JS object to act as endpoint for all routes
//projectData = {};

// Require Express to run server and routes

// Start up an instance of app
const express= require('express');
const app= express();
/* Middleware*/
const bodyParser= require('body-Parser')
const Cors= require('cors')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors())
// Cors for cross origin allowance
const projectData={};

// Initialize the main project folder
app.use(express.static('website'));
wheatherdata = {};
app.get('/all',all)//create http request get name all
function all (req,res){
    res.send(wheatherdata) 
    console.log (wheatherdata)
    
}

app.post('/send',sendData)//create http request post name send
function sendData(req , res){
    newEntry ={
        content:req.body.content,//Here we will record the content data
        Date:req.body.Date,//Here we will record the Date data
        temp:req.body.temp ,//Here we will record the temp data
        name:req.body.name //Here we will record the name data
    }
    wheatherdata = newEntry;//Here we will push the data into the array with its name wheatherdata
    
    //We will send data to send
    res.send(wheatherdata)
}
const list =()=>{
    console.log('http://localhost:5000')
}
app.listen(5000,list)

// Setup Server
// it is working