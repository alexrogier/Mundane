app.controller("treasurerollController", ["$scope", "$log", "currency", function ($scope, $log, currency) {
    $scope.d20Roll = 15;
    $scope.d100Roll = 50;
    $scope.rollResult;

    $scope.$watch("d20Roll", function () {
        if (!$scope.d20Roll) return;
        if ($scope.d20Roll < 1) $scope.d20Roll = 1;
        if ($scope.d20Roll > 20) $scope.d20Roll = 20;
    });

    $scope.$watch("d100Roll", function () {
        if (!$scope.d100Roll) return;
        if ($scope.d100Roll < 1) $scope.d100Roll = 1;
        if ($scope.d100Roll > 100) $scope.d100Roll = 100;
    });

    $scope.calculateTreasureRoll = function () {
        $scope.rollResult = currency.treasureRoll($scope.d20Roll, $scope.d100Roll);
    };
}]);