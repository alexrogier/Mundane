app.controller("itemlookupController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.itemTable = [];

    $scope.getAllItems = function () {
        database.getAllItems().then(function (items) {
            $scope.itemTable = items ? items : [];
        });
    };

    $scope.listenForItems = function () {
        return $scope.itemTable.length > 0;
    };
}]);