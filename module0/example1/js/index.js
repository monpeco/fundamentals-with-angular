var app = angular.module('testapp', [])

app.controller('testController', function($scope, testConstant){
  $scope.test = 'Hello'
  $scope.constant = testConstant
               })

app.constant('testConstant', 'This is a constant')