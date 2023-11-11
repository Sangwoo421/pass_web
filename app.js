const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('나는 상우');
    console.log('Listening on port: ', PORT);
});