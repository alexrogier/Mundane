app.service("database", ['$http', "$log", function ($http, $log) {
    var url = "http://localhost:39446/api/mundane/";

    this.generateLoot = function (numResults, bEnableMagicalItems) {
        return $http({
            url: url + "generateloot",
            method: "GET",
            params: {
                numResults: numResults,
                bEnableMagicalItems: bEnableMagicalItems
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

    this.helloWorld = function () {
        $log.log("app.dataservice.js HelloWorld!");
        return "Hello World!";
    };
}]);