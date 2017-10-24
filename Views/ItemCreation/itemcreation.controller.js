app.controller("itemcreationController", ["$scope", "$log", "database", function ($scope, $log, database) {
    $scope.init = function () {
        $("#accordion").collapse();
    };
    $scope.newItem = {
        name: "",
        worth: "",
        bismagical: false
    };
    $scope.allItems = [];

    $scope.getAllItems = function () {
        $scope.allItems = JSON.parse(database.getAllItems());
    };
    $scope.createItem = function () {
        // validate item
        //database.createItem($scope.newItem);
        var newItem = {
            name: $scope.newItem.name,
            worth: $scope.newItem.worth,
            bismagical: $scope.newItem.bismagical
        };
        $scope.allItems.push(newItem);
        $log.log($scope.allItems);
        $scope.resetNewItem();
        //$scope.getAllItems();
    };
    $scope.resetNewItem = function () {
        $scope.newItem.name = "";
        $scope.newItem.worth = "";
        $scope.newItem.bismagical = false;
    };
}]);
