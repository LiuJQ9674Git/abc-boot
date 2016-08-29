var express = require('../../');

var app = express();


//一个中间件栈，处理指向/user/:id的GET请求
app.get('/user/:id',function(req, res, next){
    console.log('0000000000-ID:', req.params.id);
  if(req.params.id==0){
    next('route');
  }else{
    next();
  }

},function(req, res, next){
      console.log('1111111-ID:', req.params.id);
      res.send('User Info');
      next();
}
);

//处理/user/:id，打印出用户id
app.get('/user/:id',function(req, res, next){
  console.log('22222-ID:', req.params.id);
  res.end(req.params.id);
});


/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}

