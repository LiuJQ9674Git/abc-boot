/**

var express = require('../..');

var app = module.exports = express();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));


if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
**/

 function app(appMVC){
  var appLocal=appMVC||  require('../..')();
  appLocal.use('/api/v1', require('./controllers/api_v1'));
  appLocal.use('/api/v2', require('./controllers/api_v2'));

  /* istanbul ignore next */
  if (!module.parent) {
    appLocal.listen(3000);
    console.log('Express started on port 3000');
  }
  return appMVC;
}
module.exports = app;
