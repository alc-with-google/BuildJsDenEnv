import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

//enable gzip, to see size
app.use(compression());


//support to express for serving static files
app.use(express.static('dist'));

// index.html comes from the dist server rather from the src folder
app.get ('/', function (req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res){
    res.json([
    {"id": 1, "firstName": "Matthew", "lastName":"oye", "email": "ml@gmail.com"},
    {"id": 2, "firstName": "Cornel", "lastName":"okon", "email": "co@gmail.com"},
    {"id": 3, "firstName": "Osita", "lastName":"Irene", "email": "oi@gmail.com"}
    ]);
});

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
});
