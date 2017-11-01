app.controller("lootgeneratorController", ["$scope", "database", "$log", "currency", function ($scope, database, $log, currency) {
    $scope.lootType = "generic";
    $scope.bEnableMagicalItems = true;
    $scope.rarityUncommon = 25;
    $scope.rarityRare = 15;
    $scope.lootTable = [];

    $scope.numResults = {
        value: 10,
        options: {
            floor: 1,
            ceil: 30
        }
    };

    $scope.generateLoot = function () {
        database.generateLoot(
            $scope.lootType,
            $scope.numResults.value,
            $scope.bEnableMagicalItems,
            $scope.rarityUncommon,
            $scope.rarityRare
        ).then(function (data) {
            $scope.lootTable = data;
        });
    };
    
    $scope.decipherRarity = function (rarity) {
        return database.decipherRarity(rarity);
    };
}]);