app.config(function ($routeProvider) {
    $routeProvider
        .when("/lootgenerator",
        {
            templateUrl: "Views/LootGenerator/lootgenerator.html",
            controller: "lootgeneratorController"
        })
        .when("/itemlookup",
        {
            templateUrl: "Views/ItemLookup/itemlookup.html",
            controller: "itemlookupController"
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
});