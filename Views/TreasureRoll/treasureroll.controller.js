app.controller("treasureRollController", ["$scope", "$log", "currency", function ($scope, $log, currency) {
    $scope.d20Roll = 15;
    $scope.d100Roll = 50;
    $scope.rollResult;

    $scope.calculateTreasureRoll = function () {
        $scope.rollResult = currency.treasureRoll($scope.d20Roll, $scope.d100Roll);
    };
}]);