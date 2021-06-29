const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/calculate', function(req, res) {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;
    res.send('The result is ' + result);
})

app.listen(3000, function() {
    console.log('app listening to port 3000 yey!!!');
})