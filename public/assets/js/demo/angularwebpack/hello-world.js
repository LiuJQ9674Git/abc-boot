module.exports=function(ngModule){
    ngModule.directive('helloWorld',helloWorld);
    require('./hello-world.css');
   function helloWorld(){
    return{
      scope:{},

      restrict: 'AE',
      replace: true,
      templateUrl: '/static/template/angulardemo/hello-world.html',
      controllerAs:'vm',//$scope.vm={greeting:''}
      controller:function () {
        var vm=this;
        vm.greeting="hello being";
      }
    };
  };

}
