'use strict';

const server = require('./server/serverCreator').create();

server.listen(9000, function () {
  console.log('Server is running on http://localhost:9000');
});
