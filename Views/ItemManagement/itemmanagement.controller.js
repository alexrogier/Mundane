app.controller("itemmanagementController", ["$scope", "database", "$log", function ($scope, database, $log) {
    $scope.newItem = {
        bmagical: false,
        bequipment: false,
        bfood: false,
        bpotion: false,
        btool: false,
        btradegood: false
    };
    $scope.itemTemplate = angular.copy($scope.newItem);
    $scope.itemTable = [];
    $scope.selected;
    $scope.bEdittingItem;
    var bLoadError;

    $scope.submitItem = function () {
        if ($scope.bEdittingItem) {
            $scope.editItem();
        } else {
            $scope.createItem();
        }
    };
    $scope.createItem = function () {
        database.createItem($scope.newItem)
            .then(function (response) {
                resetNewItem();
                $log.log(response);
                $scope.getAllItems();
            })
            .catch(function (error) {
                $log.log(error);
                bLoadError = true;
            });
    };
    $scope.deleteItem = function (itemID) {
        database.deleteItem(itemID)
            .then(function (response) {
                $log.log(response);
                $scope.getAllItems();
            })
            .catch(function (error) {
                $log.log(error);
                bLoadError = true;
            });
    };
    $scope.enterEditMode = function (item) {
        window.scrollTo(0, 0);
        $scope.newItem = angular.copy(item);
        $log.log($scope.newItem);
        $scope.bEdittingItem = true;
    };
    $scope.exitEditMode = function (item) {
        resetNewItem();
        $scope.bEdittingItem = false;
    };
    $scope.editItem = function () {
        database.modifyItem($scope.newItem)
            .then(function (response) {
                $log.log(response);
                $scope.getAllItems();
                $scope.exitEditMode();
            })
            .catch(function (error) {
                $log.log(error);
                bLoadError = true;
            });
    };
    $scope.getAllItems = function () {
        database.getAllItems()
            .then(function (items) {
                $scope.itemTable = items ? items : [];
            })
            .catch(function (error) {
                $log.log(error);
                bLoadError = true;
            });
    };
    $scope.listenForItems = function () {
        var msg;
        if (bLoadError) {
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

    function resetNewItem() {
        $scope.newItem = angular.copy($scope.itemTemplate);
    }
}]);