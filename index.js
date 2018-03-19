let config = require('./config.json');
let request = require('request');
let BusServiceRouteLister = require('./lib/BusServiceRouteLister');

let busServiceRouteLister = new BusServiceRouteLister(config.accessKey);

busServiceRouteLister.getData(data => {
    console.log(JSON.stringify(data[985], null, 2));
});
