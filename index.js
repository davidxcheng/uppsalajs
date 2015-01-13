var koa = require('koa'),
    serve = require('koa-static'),
    config = require('./config.js'),
    app = koa();

app.use(serve(__dirname + '/public'));
app.listen(config.port);

console.log('listening on port %s..', config.port);