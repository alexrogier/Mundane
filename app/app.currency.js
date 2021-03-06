﻿app.service("currency", ["$log", "dice", function ($log, dice) {
    var treasureTableA = [
        { min: 1, max: 30, roll: "5d6", coin: "CP" },
        { min: 31, max: 60, roll: "4d6", coin: "SP" },
        { min: 61, max: 70, roll: "3d6", coin: "EP" },
        { min: 71, max: 94, roll: "3d6", coin: "GP" },
        { min: 95, max: 100, roll: "1d6", coin: "PP" }
    ];
    var treasureTableB = [
        { min: 1, max: 30, roll: "1d6x10", coin: "EP" },
        { min: 31, max: 60, roll: "7d6x10", coin: "SP" },
        { min: 61, max: 70, roll: "1d6x10", coin: "GP" },
        { min: 71, max: 94, roll: "3d4x10", coin: "GP" },
        { min: 95, max: 100, roll: "3d6", coin: "PP" }
    ];

    this.treasureRoll = function (d20, d100) {
        var lootTable = (d20 < 18 ? treasureTableA : treasureTableB);
        var tableRow = getTableRow(d100, lootTable);

        var diceAmt = tableRow.roll.slice(0, 1),
            diceType,
            diceMultiplier;
        diceType = tableRow.roll.slice(tableRow.roll.indexOf("d") + 1, tableRow.roll.indexOf("d") + 2);
        if (tableRow.roll.indexOf("x") > 0) {
            diceMultiplier = tableRow.roll.slice(tableRow.roll.indexOf("x") + 1, tableRow.roll.length);
        } else {
            diceMultiplier = 1;
        }

        return dice.rollDice(diceAmt, diceType, diceMultiplier) + " " + tableRow.coin;
    };

    this.getTable = function(type) {
        switch (type) {
            case "A": return treasureTableA; 
            case "B": return treasureTableB;
        }
        return null;
    }

    this.getTableType = function(d20) {
        if (d20 < 18) return "A";
        if (d20 >= 18) return "B";
        return null;
    }

    this.getRoll = function (d20, d100) {
        var lootTable = (d20 < 18 ? treasureTableA : treasureTableB);
        var tableRow = getTableRow(d100, lootTable);
        return tableRow.roll + " " + tableRow.coin;
    }

    function getTableRow(d100, table) {
        var tableRow;
        for (var i = 0; i < table.length; i++) {
            if (d100 >= table[i].min && d100 <= table[i].max) tableRow = table[i];
        }
        return tableRow;
    }
}]);