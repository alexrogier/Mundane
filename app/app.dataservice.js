app.service("database", ['$http', "$log", function ($http, $log) {
    this.generateLoot = function (numResults, bEnableMagicalItems) {
        return $http({
            url: "http://localhost:39446/api/mundane/getallitems",
            method: "GET",
            params: {
                numResults: numResults,
                bEnableMagicalItems: bEnableMagicalItems
            }
        }).then(function (response) {
            //$log.log(response.data);
            return response.data;
        });
    };

    this.helloWorld = function () {
        $log.log("app.dataservice.js HelloWorld!");
        return "Hello World!";
    };
}]);