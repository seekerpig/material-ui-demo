const express = require ('express');
var request = require("request");

const app = express();

const port = 9000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/newEndpoint', (req, res) => res.send('New endpoint!'));
app.get('/getWeathersingapore', (req, res) => {
    request(
        "http://api.openweathermap.org/data/2.5/weather?q=singapore&appid=92ea3bf577512e6361472a34784831c7",
        function(error, response, body){
            if (!error && response.statusCode === 200){
                //var parsedBody = JSON.parse(body);
                //res.send(parsedBody); // print the obj after JSON.parse
                res.send(body);
            }
        }
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));