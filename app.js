const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('이건 상우꺼');
    console.log('Listening on port: ', PORT);
});