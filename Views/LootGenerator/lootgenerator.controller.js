app.controller("lootgeneratorController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.lootType = "generic";
    $scope.bEnableMagicalItems = true;
    $scope.numResults = 10;
    $scope.lootTable = [];

    $scope.generateLoot = function () {
        database.generateLoot($scope.numResults, $scope.bEnableMagicalItems).then(function (data) {
            $scope.lootTable = data;
        });
    } 
}]);