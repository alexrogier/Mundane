app.config(function ($routeProvider) {
    $routeProvider
        .when("/lootgenerator",
        {
            templateUrl: "Views/LootGenerator/lootgenerator.html",
            controller: "lootgeneratorController"
        })
        .when("/treasureroll",
        {
            templateUrl: "Views/TreasureRoll/treasureroll.html",
            controller: "treasurerollController"
        })
        .when("/wildmagicsurge",
        {
            templateUrl: "Views/WildMagicSurge/wildmagicsurge.html",
            controller: "wildmagicsurgeController"
        })
        .when("/travelencounters",
        {
            templateUrl: "Views/TravelEncounters/travelencounters.html",
            controller: "travelencountersController"
        })
        .when("/itemmanagement",
        {
            templateUrl: "Views/ItemManagement/itemmanagement.html",
            controller: "itemmanagementController"
        })
});