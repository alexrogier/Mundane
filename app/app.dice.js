app.service("dice", ["$log", function ($log) {
    this.rollDice = function (diceAmt = 1, diceType, diceMultiplier = 1) {
        var rollResult = 0;
        for (var i = 0; i < diceAmt; i++) {
            rollResult += Math.floor(Math.random() * diceType + 1);
        }
        rollResult *= diceMultiplier;
        return rollResult;
    }
}]);