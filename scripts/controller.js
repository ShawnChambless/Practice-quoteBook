var app = angular.module('quotes');

 app.controller('mainCtrl', function($scope, dataService) {

     $scope.quotes = dataService.getData();
     $scope.quote = {};

     $scope.addQuote = function() {
         var dataObj = {
             text: $scope.text,
             author: $scope.author
         }
         dataService.addData(dataObj);
         };

     $scope.removeQuote = function() {
         dataService.removeData($scope.title);
     }

 });
