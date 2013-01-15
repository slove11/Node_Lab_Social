/**
 * Created with JetBrains WebStorm.
 * User: scottlove
 * Date: 1/13/13
 * Time: 7:19 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

app.get('/stooges/:name?', function(req, res, next) {
    var name = req.params.name;

    switch ( name ? name.toLowerCase() : '' ) {
        case 'larry':
        case 'curly':
        case 'moe':
            res.render('stooges', {stooge: name});
            break;

        default:
            next();
    }
});

app.get('/stooges/*?', function(req, res){
    res.render('stooges', {stooge: null});
});

app.get('/?', function(req, res){
    res.render('index');
});

var port = 5341;
app.listen(port);
console.log('Listening on port ' + port);