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
});