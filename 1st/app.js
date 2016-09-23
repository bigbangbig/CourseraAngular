(function (){

angular.module("LunchCheck", [])

.controller("LunchCheckController", ["$scope"], function(){

$scope.message = "";
$scope.items = "";

$scope.countItems = function(){
  if ($scope.items != "") {
    var result = $scope.items.split(',');
    if (result.length <= 3) {
      $scope.message = "Enjoy!";
    }else {
      $scope.message = "Too much!";
    }
  }else {
    $scope.message = "Please enter data first.";
  }
}


});

})();
