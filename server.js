'use strict';

const express = require('express');
const server = express();

server.use('/api', require(process.env.PWD + '/api'));
server.use(express.static(process.env.PWD + '/public'));

server.listen(1234);
