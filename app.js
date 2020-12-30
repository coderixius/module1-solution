(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope,
                              $filter,
                              $injector){

  $scope.food = " ";

  $scope.upper=function () {


  };



console.log($injector.annonate(LunchCheckController));
}

function Annonate(textbox,button,placeholder){
  return "Enjoy";
}

console.log(LunchCheckController.toString());

})();
