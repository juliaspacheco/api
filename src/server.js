const express = require('express');

const app = express();

const PORT = 3004;

app.get('/api/teste', (request, response) => {
    response.send('Bora devs');
})

app.listen(PORT, () => (`Running at port ${PORT}`));