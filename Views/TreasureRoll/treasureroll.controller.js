app.controller("treasurerollController", ["$scope", "$log", "currency", function ($scope, $log, currency) {
    $scope.rollResult;

    $scope.calculateTreasureRoll = function () {
        $scope.rollResult = currency.treasureRoll($scope.d20.value, $scope.d100.value);
    };

    $scope.d20 = {
        value: 15,
        options: {
            floor: 1,
            ceil: 20,
            translate: function (value, sliderId, label) {
                switch (label) {
                    case 'model':
                        return value + " (Table " + currency.getTableType(value) + ")";
                    default:
                        return value;
                }
            }
        },
    };
    $scope.d100 = {
        value: 1,
        options: {
            floor: 1,
            ceil: 100,
            translate: function (value, sliderId, label) {
                switch (label) {
                    case 'model':
                        return value + " (Roll " + currency.getRoll($scope.d20.value, $scope.d100.value) + ")";
                    default:
                        return value;
                }
            }
        }
    };

    $scope.rewardTableA = function () {
        return currency.getTable("A");
    };
    $scope.rewardTableB = function () {
        return currency.getTable("B");
    };
}]);