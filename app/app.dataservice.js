app.service("database", ['$http', "$log", function ($http, $log) {
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

    this.getAllItems = function () {
        return $http({
            url: url + "/getallitems",
            method: "GET"
        }).then(function (response) {
            return response.data;
        });
    }
}]);