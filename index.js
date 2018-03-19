let config = require('./config.json');
let request = require('request');

request.get({
    url: 'http://datamall2.mytransport.sg/ltaodataservice/BusServices',
    headers: {
        AccountKey: config.accessKey,
        accept: 'application/json'
    }
}, (err, resp, body) => {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
});
