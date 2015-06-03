var app = angular.module('quotes');

 app.controller('mainCtrl', function($scope, dataService) {

     $scope.quotes = dataService.getData();
     $scope.quote = {};
     $scope.showAdd = false;
     $scope.showRemove = false;
     $scope.addQuote = function() {
         var dataObj = {
             text: $scope.text,
             author: $scope.author
         }
         dataService.addData(dataObj);
         $scope.toggleAdd = true;
         };

     $scope.removeQuote = function() {
         dataService.removeData($scope.title);
         $scope.toggleRemove = true;
     }

     $scope.toggleShowAdd = function() {
        $scope.showAdd = !$scope.showAdd;
        $scope.showRemove = false;

     }
     $scope.toggleShowRemove = function() {
         $scope.showRemove = !$scope.showRemove;
         $scope.showAdd = false;

     }

 });
