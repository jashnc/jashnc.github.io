var app=angular.module('home',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: '/templates/home.html'
          })
          .when('/aboutme',{
              templateUrl: '/templates/aboutme.html'
          })
          .when('/resume', {
              templateUrl: '/templates/resume.html'
          })
          .when('/contactme', {
              templateUrl: '/templates/contactme.html'
          });

});
app.controller('controller',function($scope){

    /*     
    Here you can handle controller for specific route as well.
    */


});