const express = require('express');

const apiRoutes = require('./api/apiRoutes');

const server = express();

server.use('/api', apiRoutes);

const port = 5000;



server.listen(port, () => {
    console.log(`server listening on port ${port}`);
})
