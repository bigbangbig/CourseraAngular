(function (){
'use strict';

angular.module("LunchCheck", [])

.controller("LunchCheckController", ["$scope", function($scope){

$scope.message = "";
$scope.items = "";
$scope.color = "red";

$scope.countItems = function(){
  if ($scope.items != "") {

    var result = $scope.items.split(',');
    var counter = 0;

    for (var i = 0; i < result.length; i++) {
      if (result[i].trim()!="") {
        counter++;
      }
    }

    if (counter <= 3) {
      $scope.message = "Enjoy!";
    }else {
      $scope.message = "Too much!";
    }

    $scope.color = "green";

  }else {
    $scope.message = "Please enter data first.";
    $scope.color = "red";
  }
}


}]);

})();
