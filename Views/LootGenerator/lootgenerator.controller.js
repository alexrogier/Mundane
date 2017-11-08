app.controller("lootgeneratorController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.lootType = "generic";
    $scope.bEnableMagicalItems = true;
    $scope.rarityCommon = 60
    $scope.rarityUncommon = 85;
    $scope.lootTable = [];

    $scope.numResults = {
        value: 10,
        options: {
            floor: 1,
            ceil: 30
        }
    };

    $scope.raritySlider = {
        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            translate: function (value, sliderId, label) {
                switch (label) {
                    case 'model':
                        return "Common: " + value + "%"; break;
                    case 'high':
                        return "Uncommon: " + ($scope.rarityUncommon - $scope.rarityCommon) + "%"; break;
                    default:
                        return value;
                }
            }
        }
    };
    
    $scope.generateLoot = function () {
        database.generateLoot(
            $scope.lootType,
            $scope.numResults.value,
            $scope.bEnableMagicalItems,
            ($scope.rarityUncommon - $scope.rarityCommon), // uncommon rarity
            (100 - $scope.rarityUncommon) // rare rarity
        ).then(function (data) {
            $scope.lootTable = data;
        });
    };
    
    $scope.decipherRarity = function (rarity) {
        return database.decipherRarity(rarity);
    };
}]);