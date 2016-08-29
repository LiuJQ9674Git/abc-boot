module.exports = function(app){

  app.use('/api/v1', require('./controllers/api_v1'));
  app.use('/api/v2', require('./controllers/api_v2'));

  /* istanbul ignore next */
  if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
  }
  
}


