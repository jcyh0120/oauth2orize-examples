console.log("hello");

angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope) {

  $scope.devList = [
    { text: "HTML5", checked: true },
    { text: "CSS3", checked: false },
    { text: "JavaScript", checked: false }
  ];
  
});