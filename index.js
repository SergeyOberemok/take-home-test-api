'use strict';

var server = require('./src/serverCreator').create();

server.listen(9000, function () {
    console.log('Server is running on http://localhost:9000');
});
