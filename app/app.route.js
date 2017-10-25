app.config(function ($routeProvider) {
    $routeProvider
        .when("/lootgenerator",
        {
            templateUrl: "Views/LootGenerator/lootgenerator.html",
            controller: "lootgeneratorController"
        })
        .when("/itemcreation",
        {
            templateUrl: "Views/ItemCreation/itemcreation.html",
            controller: "itemcreationController"
        })
        .when("/itemlookup",
        {
            templateUrl: "Views/ItemLookup/itemlookup.html",
            controller: "itemlookupController"
        })
});