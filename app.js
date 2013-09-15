
/**
 * Module dependencies.
 */

var express = require('express');
var consolidate = require('consolidate');

var http = require('http');
var path = require('path');

var app = express();

var routes = require('./routes');


// all environments
app.set('port', process.env.PORT || 3000);

app.engine('html', consolidate.toffee);
app.set('view engine', 'html')
app.set('views', __dirname + '/views');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// this just smells of n00b
app.get('/', routes.index);
app.get('/biography', routes.biography);
app.get('/credits', routes.credits);
app.get('/kids_picks', routes.kids_picks);
app.get('/miscellaneous', routes.miscellaneous);
app.get('/resources', routes.resources);
app.get('/summary', routes.summary);
app.get('/technologies', routes.technologies);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
