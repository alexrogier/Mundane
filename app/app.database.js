app.service("database", ['$http', "$log", function ($http, $log) {
    //var url = "api/mundane/";
    var url = "http://localhost:39446/api/mundane/";

    this.generateLoot = function (lootType, numResults, bEnableMagicalItems, rarityUncommon, rarityRare) {
        return $http({
            url: url + "generateloot",
            method: "GET",
            params: {
                lootType: lootType,
                numResults: numResults,
                bEnableMagicalItems: bEnableMagicalItems,
                rarityUncommon: rarityUncommon,
                rarityRare: rarityRare
            }
        }).then(function (response) {
            return response.data;
        });
    };

    this.createItem = function (newItem) {
        return $http({
            url: url + "createitem",
            method: "POST",
            params: {
                itemdata: JSON.stringify(newItem)
            }
        }).then(function (response) {
            return response.data;
        });
    };

    this.deleteItem = function (itemID) {
        return $http({
            url: url + "deleteitem",
            method: "POST",
            params: {
                itemid: itemID
            }
        }).then(function (response) {
            return response.data;
        });
    };

    this.modifyItem = function (item) {
        return $http({
            url: url + "modifyItem",
            method: "POST",
            params: {
                itemdata: JSON.stringify(item)
            }
        }).then(function (response) {
            return response.data;
        });
    }

    this.getAllItems = function () {
        return $http({
            url: url + "getallitems",
            method: "GET"
        }).then(function (response) {
            return response.data;
        });
    };

    this.decipherRarity = function (rarity) {
        var strRarity = "Unknown";
        switch (rarity) {
            case 0: strRarity = "Common"; break;
            case 1: strRarity = "Uncommon"; break;
            case 2: strRarity = "Rare"; break;
        }
        return strRarity;
    };
}]);