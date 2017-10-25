app.controller("lootgeneratorController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.lootType = "generic";
    $scope.bEnableMagicalItems = true;
    $scope.lootTable = [];

    $scope.numResults = {
        value: 10,
        options: {
            floor: 1,
            ceil: 30
        }
    };

    $scope.generateLoot = function () {
        database.generateLoot($scope.lootType, $scope.numResults.value, $scope.bEnableMagicalItems).then(function (data) {
            $scope.lootTable = data;
        });
    } 
}]);