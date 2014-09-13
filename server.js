var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(process.cwd(), 'public')));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
