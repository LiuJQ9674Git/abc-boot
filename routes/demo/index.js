/**

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
**/
var comment = require('./comments/comment');

function app(appMVC){
  var appLocal=appMVC||   require('express')();

  appLocal.get('/comments', comment.list);
  appLocal.get('/comments/:id', comment.get);
  appLocal.delete('/comments/:id', comment.delete);
  appLocal.post('/comments/add', comment.add);
  appLocal.put('/comments/:id', comment.update);
  return appMVC;
}
module.exports = app;
