var express = require('express');
var app = express();

app.get('/hello-world', function(req, res) {
    res.send('hello world');
});

app.listen(3000, () => {
  console.log('Listening on http://0.0.0.0:3000');
});
