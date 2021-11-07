var port = process.env.PORT || 3000
    http = require('http')
    //fs = require('fs')
    //html = fs.readFileSync('Home.html');
    const express = require('express');
    const cors = require('cors');
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.static(__dirname+'/home'))
    app.use('/commands',express.static(__dirname+'/home/commands'))
    app.use('/feedback',express.static(__dirname+'/home/feedback'))


// Listen on port 3000, IP defaults to 127.0.0.1
//server.listen(port);

// Put a bad ass message on the terminal
//console.log('Server running at http://127.0.0.1:' + port + '/');
app.listen(port,() =>console.log(`Corriendo en el puerto ${port}`))