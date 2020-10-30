require( 'dotenv' ).config() // looks for .env ; process.env gets it's values
const socket = require('./app/router/socket.js');
const { urlencoded } = require('express');



const express = require('express');
const apiRouter = require('./app/router/router.js');
const app = express();
const http = require('http').createServer(app);


const PORT = process.env.PORT || 3000

// for parsing incoming POST data
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// for serving all the normal html
app.use( express.static('public') );


socket(http)

apiRouter(app)






http.listen(3000, () => {
    console.log('SERVER LISTENING ON *:3000');
});



