app.controller("itemlookupController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.itemTable = [];
    $scope.selected;
    var bError;

    $scope.getAllItems = function () {
        database.getAllItems()
            .then(function (items) {
                $scope.itemTable = items ? items : [];
            })
            .catch(function (error) {
                $log.log(error);
                bError = true;
            });
    };

    $scope.listenForItems = function () {
        var msg;
        if (bError) {
            msg = "There was an error fetching item data.";
        } else {
            if ($scope.itemTable.length > 0) {
                msg = "Item Name";
            } else {
                msg = "Loading Items...";
            }
        }
        return msg;
    };

    $scope.decipherRarity = function (rarity) {
        return database.decipherRarity(rarity);
    };
}]);