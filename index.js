let config = require('./config.json');
let request = require('request');
let PaginatedRequestor = require('./lib/PaginatedRequestor');

let requestor = new PaginatedRequestor('BusRoutes', config.accessKey, 1);

requestor.performRequest().then(data => {
    console.log(JSON.stringify(data, null, 2));
});
