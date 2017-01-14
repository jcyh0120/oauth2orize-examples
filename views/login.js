angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope,$http) {

  $scope.login = function(){
    var data = {
        username:'bob',
        password: 'secret'
    };

    $http.post('http://localhost:3000/login', data).then(function(result){
        console.log("success");
        
    }, function(error){
        console.error(error);
    });
  }
  
});