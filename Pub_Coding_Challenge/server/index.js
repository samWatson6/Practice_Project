const express = require('express');
const Unique_JWT = require('../constants.js')
const bodyParser = require('body-parser');
const request =  require('request');

const app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('listening on port 3001!');
});

app.get('/data', (req, res) => {
  //HTTP request 
  request.post({
    headers: {
      'content-type' : 'application/json',
      'X-Authorization': Unique_JWT
    },
    url:     'https://publist.ai/api/v2/jobs.frontend',
    body:    '{"query": "tech"}'
  }, 
  //callback to parse and send the data
  function(error, response, body){
    var data = JSON.stringify(body);
    res.send(data);
  });

})





