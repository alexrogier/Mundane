app.controller("travelencountersController", ["$scope", "$log", "dice", function ($scope, $log, dice) {
    $scope.rollResult;

    $scope.getEncounter = function () {
        var d20roll = dice.rollDice(1, 20, 1);
        $scope.rollResult = "(" + (d20roll) + ") " + $scope.encounterTable[d20roll - 1];
    };

    $scope.encounterTable = [
        /* 01 */ "The party approaches a small pack of 4 bandits that are tolling the passage the party is traveling. The bandits demand 5g for each person or will become hostile. The race of the bandits are dependant on the nearby region.",
        /* 02 */ "The party approaches a pack of 12 heavily armored men holding wanted papers on their person. They observe the party intently as they pass. Roll a d20 DC 14 for one of the guards to suspect a party member.",
        /* 03 */ "The party comes across a large river with a bridge that is completely destroyed. Nearby, there is a ferry run by a female half-orc that offers to take travelers across the river for a small fee of 2g each person. The next bridge is 1 day away and the river is too deep to trek normally.",
        /* 04 */ "An arrow suddenly flies by the party, nearly striking them from up ahead. A quick glance reveals that a pack of 4 travelers are combatting local wildlife (Wolves | Goblins | Kobolds). It is easily discernable the arrow was simply collateral from the fight.",
        /* 05 */ "An overturned cart is discovered along the forward path. When investigated, it reveals a dead noble whose race is that of the nearby region lying on the ground in blood with sword wounds. While the noble has no belongings on their person, party members can perform an Investigation DC 16 check to discover a secret compartment in the cart to find 2 treasure rolls worth in gold.",
        /* 06 */ "A large pack of (6 | 10 | 15) wildlife (Wolves | Goblins | Kobolds | Undead) are suddenly seen marching in the near distance towards the party. The party must hide themselves or face the pack.",
        /* 07 */ "While traveling, party members perform a Perception DC 18 check to spot something in the nearby vacinity glisten light in their eye. Upon looking, they'll notice a (Small Chest | Sack | Campsite) has been abandoned that contains money worth 1 treasure roll.",
        /* 08 */ "A traveling peddlar on his way to a nearby settlement beckons the party to browse his wares. This peddlar sells materials at cheaper cost and buys at prices higher than normal appraisal.",
        /* 09 */ "A weather effect (Flood | Snow) has caused the forward path to become difficult terrain. If the party travels through the weather anyway, they must succeed on a Con Save DC 18 or suffer Level 1 Exhaustion due to sickness. (Advantage if snow while donning warm gear)",
        /* 10 */ "A person whose race is that of the local region appears beat and battered. When approached, they're seen catching their breath while heavily panting. When the party approaches, they beckons that the party lend them any supplies they can manage for some local townsfolk are chasing her because they're a (Thief | Prostitute | Clergyman).",
        /* 11 */ "The party stumbles upon a rare sight alongside the path they're traveling. An abundance of (Mushrooms | Berries) can be seen in the nearby area and if picked, provides 1d6+2 servings of quality food.",
        /* 12 */ "The party comes across a large river with a bridge that contains a Troll whose simply sitting down in the middle of the bridge. When approached, he appears rather stupid and won't let any pass unless he's given something of value. He will however, not accept money. The river is too deep to trek normally.",
        /* 13 */ "A dense fog overtakes the nearby area. Party members must succeed on a Survival DC 18 check or become lost for the next day.",
        /* 14 */ "A large military patrol (roughly ~30) carrying the banner of the local kingdom marches by the party along the road, forcing them to stand to the side of the path for a time being. One of the patrolmen hail the party and ask if they've witnessed any threats in the nearby area of late.",
        /* 15 */ "4 mercenary looking type travelers are seen resting at a small campsite eating gruel. They have a person in shackles. If inquired, they say that the one in shackles is wanted and they're on their way to a nearby town to turn them in.",
        /* 16 */ "A large herd of passive wildlife (Deer | Sheep | Cows | Horses | Large Birds) block the forward path. The party can navigate through the herd, but will trek through the herd's poop droppings and be delayed 2 hours.",
        /* 17 */ "A bulky (Ranger | Fighter | Paladin) approaches the party and beckons them on their travel. They desire to know the path they've taken and flips 1PP their way if they were nice.",
        /* 18 */ "A decent distance off the side of the road, an alluring aroma of cooked food can be smelt. Upon investigation, the party comes across a friendly (Ogre | Centaur | Druid) who is cooking what looks to be a mashup of herbs and vegetables. They offer the party a serving for a small fee.",
        /* 19 */ "A small pack of travelers whose race is that of the local region pass by the party and make idle chatter. They inform the party of a nearby shortcut that's been recently discovered and will reduce the party's travel time by half a day.",
        /* 20 */ "A random party member suddenly trips along the path. Looking at the ground, they've tripped due to a hole in the ground that was covered up. The hole reveals an abundance of gems worth 3 treasure rolls.",
    ];
}]);