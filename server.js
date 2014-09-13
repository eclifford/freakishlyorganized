var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(process.cwd(), 'public')));

var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
