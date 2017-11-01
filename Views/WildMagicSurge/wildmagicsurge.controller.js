﻿app.controller("wildmagicsurgeController", ["$scope", "$log", function ($scope, $log) {
    $scope.d100Roll = 1;
    $scope.rollResult;

    $scope.$watch("d100Roll", function () {
        if (!$scope.d100Roll) return;
        if ($scope.d100Roll < 1) $scope.d100Roll = 1;
        if ($scope.d100Roll > 100) $scope.d100Roll = 100;
    });

    $scope.getWildMagic = function () {
        $scope.rollResult = wildMagic[$scope.d100Roll - 1];
    }

    var wildMagic = [
        /* 001 */ "Your hit points become 0 and you begin making death saves.",
        /* 002 */ "Your skin turns into a random color. This effects only ends through magical means such as remove curse.",
        /* 003 */ "You polymorph into a chicken fof the next minute or unti lyou take damage.",
        /* 004 */ "You cast Darkness centered on you.",
        /* 005 */ "Whenever you take damage, an amount of gold pieces equal to the damage you suffer gib from the point of impact. This effect lasts up to a minute or if you reach 0 hit points.",
        /* 006 */ "You cast a level 3 fireball centered at yourself.",
        /* 007 */ "A saproling with 10 hit points randomly appears near your feet. The saproling is 1ft. tall and appears to take a liking to you. It understands common and will perform tasks you ask of it for the next 1d4 days before dissipating.",
        /* 008 */ "For the next 8 hours, you're convinced that literally everything anybody says to you is a lie. Once the effect is over, you realized you've been charmed.",
        /* 009 */ "You cast Levitate on yourself for the next minute.",
        /* 010 */ "You lose all of your hit dice.",
        /* 011 */ "Your face becomes immolated in obscene features such as pimples, moles and other unsightly effects. Your charisma becomes a maximum of 5 when speaking to other creatures. This effect lasts for 24 hours.",
        /* 012 */ "For the next minute you gain Truesight.",
        /* 013 */ "You suffer frightening carnal hallucinations until your next turn, causing you to have disadvantage on all actions you perform and grants advantage on all actions performed against you.",
        /* 014 */ "You must succeed on a Con save DC 20, or become Lycanthropic. This is permanent but can be removed with a remove curse spell or other magical means.",
        /* 015 */ "For the next minute, copper pieces begin sporadically appearing at your feet whenever you move. Every 1 ft. you travel creates 1 copper piece.",
        /* 016 */ "You cast Entangle centered on yourself. Until the effect ends, difficult terrain doesn't affect you.",
        /* 017 */ "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flames.",
        /* 018 */ "You cast Fog Cloud centered on yourself.",
        /* 019 */ "You are unable to speak for the next minute. Whenever you attempt to speak, nothing seems to come out of your mouth.",
        /* 020 */ "You become asleep for 1d4 rounds.",
        /* 021 */ "For the next minute, your spells do not require any reagents.",
        /* 022 */ "The last spell you cast is cast an addtional time without cost.",
        /* 023 */ "You regain your lowest-level expended spell slot.",
        /* 024 */ "For the next 10 minutes, all enemies explode into gold pieces equal to the amount of health they had remaining from when they died. They leave no entrails behind other than gold pieces.",
        /* 025 */ "You gain resistance to all damage for the next minute.",
        /* 026 */ "You become allergic to magical items within 5 ft. of you for the next minute, causing you to sneeze uncontrollably and become incapacitated during these effects.",
        /* 027 */ "You gain +2 to all non-damage rolls for the next hour.",
        /* 028 */ "Your armor becomes damaged.",
        /* 029 */ "You become mute for the next 24 hours. This effects can be removed by a remove curse spell.",
        /* 030 */ "You become frozen in place as if time has stopped around you for 1d4 turns.",
        /* 031 */ "For the next 24 hours, whenever you short rest, you gain the benefits of a long rest.",
        /* 032 */ "All creatures within 10 ft. of you regain 60 hit points. (not including yourself)",
        /* 033 */ "You gain otherworldly strength for the next 1d4 hours. Your strength becomes a minimum of 25 for the duration.",
        /* 034 */ "A nearby non-player creature explodes. Its entrails appear as if confetti.",
        /* 035 */ "For the next minute, your voice booms as if shouting at the top of your lungs when you speak.",
        /* 036 */ "For the next 1d4 rounds, all creatures within 30 ft. of you will randomly switch places at the end of each turn.",
        /* 037 */ "Snow randomly begins to fall within 200 ft. and centered on you. The snow continues to fall for 1d4 hours and follows you when you move.",
        /* 038 */ "You cast remove curse on all creatures within 30 ft. of you. This can also remove curses on items that friendly creatures are donning.",
        /* 039 */ "You gain the ability to breathe fire as if you were a dragonborn for the next minute. You may perform breathe attacks for the duration, dealing 2d10 Fire damage to all creatures in a 15 ft. cone.",
        /* 040 */ "You permanently grow a tail similar to a wolf. The anatomy of the tail is a mystery and must be surgically removed.",
        /* 041 */ "Your hair permanently animates on its own. A remove curse spell will end this effect.",
        /* 042 */ "You appear as if you've just taken a swim with your garments for the next 1d12 hours. You're unable to benefit from a rest until the effect ends.",
        /* 043 */ "A small faerie mystically comes to your aid and will attack any creatures that attack you within the next 1d4 hours. The faerie deals 1d10 slashing damage to any who attack you.",
        /* 044 */ "A rust monster burrows from the ground 5 ft. in front of you and attacks ou. The monster has 40 hit points, has +4 to hit and deals 1d12+3 bludgeoning plus 1d4 necrotic damage.",
        /* 045 */ "An extra arm grows from your neck. You suffer disadvantage on any skill check requireing sight. You gain your proficiency bonus when performing strength checks.",
        /* 046 */ "For the next hour, every word you speak must be followed by the same word. (If you say, *Hello good sir* - you would say, *Hello hello good good sir sir*)",
        /* 047 */ "You are temporarily blinded for 1 minute.",
        /* 048 */ "For the next 1d4 hours, all of your spells with range greater than touch have triple range.",
        /* 049 */ "You begin hiccuping intensely for the next minute. Whenever you attempt to cast a spell, you must succeed on a Con save DC 18 or the spell fails.",
        /* 050 */ "For the next minute, you cast Fire Bolt at the end of your turn in a random direction centered on yourself hitting all creatures in a 20 ft. line of you, dealing 2d10 Fire damage.",
        /* 051 */ "For the next minute, you may reroll any dice in any roll, but must keep the new result afterwards.",
        /* 052 */ "All of your belongings other than your undergarments phase out of existence until your next turn.",
        /* 053 */ "The next spell you cast within 1 minute ripples into duplication. On each of your subsequent turns, the spell is cast for free an amount of times is has been casted prior, plus one up to a maximum of 6 and targets randomly are randomly assigned if eligible. Once 6 occurrences have been reached, the effect ends.",
        /* 054 */ "You regain 1d4 x Your Level hit points.",
        /* 055 */ "For the next 1d4 hours, your attacks and damaging spells grant you temporary health equal to the damage they deal.",
        /* 056 */ "For the next minute, whenever you open your mouth, you begin channeling a barrage of arrows as if attacking with a shortbow (3 attacks). You're unable to cast spells that require verbal semantic components during this time.",
        /* 057 */ "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
        /* 058 */ "Your body weight triples for the next 1d4 hours. Additionally, your speed is halved until the effect ends.",
        /* 059 */ "You gain resistence to all non-magical damage for the next 1d4 hours.",
        /* 060 */ "You gain +20 speed for the next 1d4 hours.",
        /* 061 */ "You become a cloud of mist for up to 1d4 minutes, causing you to leave behind all belongings and garments you're currently donning.",
        /* 062 */ "You become a plant unti lthe start of your next turn. While a plant, you are incapacited and have vulnerability to all damage. If you drop to 0 hit points, your form reverts.",
        /* 063 */ "A hippopotamus comes up from behind you as if from seemingly nowhere. It grazes near you and ignores its surroundings for the next minute. If touched, it explodes dealing 4d10 Fire damage to all creatures within 30 ft.",
        /* 064 */ "Your coin pouch seems to suddenly become lighter. You lose 1d20 copper, 1d12 silver, 1d10 electrum, 1d8 gold and 1d4 platinum.",
        /* 065 */ "For the next minute, your spell casting becomes randomized. Whenever you cast a spell, it transmutes into a random spell from the book using the closest possible spell level of your original spell.",
        /* 066 */ "A nearby non-boss enemy becomes thrice in size, strength and hit points.",
        /* 067 */ "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger. If the roll is even, you get older.",
        /* 068 */ "You gain a pool of hit points equal to half of your hit points maximum. You may distribute hit points this way to yourself or any ally within 30 ft. of you.",
        /* 069 */ "All hair on your body ompletely falls off and won't regrow until 24 hours pass.",
        /* 070 */ "A beacon of light shines upon you and follows you around for the next 24 hours. You're unable to gain the benefits of a long rest until the effect ends.",
        /* 071 */ "A spectral shield hovers near you for the next minute, granting you +2 AC.",
        /* 072 */ "A non-magical item you're currently wielding becomes cursed.",
        /* 073 */ "You become invisible, mute and unable to cast spells or attack for the next minute. Additionally, you're unable to interact with any objects or creatures.",
        /* 074 */ "For the next 1d12 hours, your right arm disappears.",
        /* 075 */ "Your arms and legs change postions with each other for the next hour.",
        /* 076 */ "You're forced to repeat the last action you performed in the exact same manner as much as you're able to for the next minute.",
        /* 077 */ "Your tongue becomes exponential in size that it's forced to droop outside of your mouth. Spellcasting requires a Con save DC 18 or the spell fails. This effect lasts 1d4 hours.",
        /* 078 */ "You forget how to read and write for the next 1d4 days.",
        /* 079 */ "Up to three creatures within 30 ft. of you take 4d10 Lightning damage.",
        /* 080 */ "You hallucinate that 1d100 rats sporadicaly come up from the ground and attack you for the next minute. At the beginning of each of your turns, you're dealt 1d6 slashing damage.",
        /* 081 */ "A nearby creature must succeed on a Charisma save DC 18 or become charmged by you for the next minute.",
        /* 082 */ "Your initiative becomes 100 for the next 1d4 days.",
        /* 083 */ "For the next hour, whenever a creature speaks your name within 60 ft. of you, you take 1d10 Force damage.",
        /* 084 */ "A wraith with 60 hit points randomly appears and fights by your side. The wraith will remain summoned for up to a minute or until defeated. Each of the wraiths attacks have +6 to hit and deal 2d6 Nectrotic damage.",
        /* 085 */ "Your ears grow thrice in size for the next 1d4 hours. You gain advantage on perception checks that require hearing until the effect ends.",
        /* 086 */ "For the next minute, all attacks and spells you cast with range greater than touch are duplicated 180 degrees in the opposite direction.",
        /* 087 */ "For the next hour, you must shout your opinion of all creatures that ou come across when you first approach them.",
        /* 088 */ "Maximize the damage of the next attack or damaging spell you perform within the next minute.",
        /* 089 */ "You begin levitating in the air at a rate of 10 ft. every 6 seconds for a minute. Then, you freefall.",
        /* 090 */ "You cast banishment on a random creature within 30 ft. of you.",
        /* 091 */ "You no longer require the need to sleep for the next 1d4 days.",
        /* 092 */ "Music beings sporadically playing in your mind, inspiring you for the next 1d10 minutes. You have +1 to all checks until the effect ends.",
        /* 093 */ "For the next minute, you regain 5 hit points at the beginning of each of your turns.",
        /* 094 */ "For the next minute, all spells and ranged weapon attack projectiles or emissions within 100 ft. of you do not go away after inflicting harm. This causes the projectiles or emissions to bounce off surfaces, continuously inflicting harm upon those witin the vicinity.",
        /* 095 */ "You suffer 1 Force damage whenever you remain in the same spot for more than 6 seconds for the next 1d10 hours. This effect ends if you reach 0 hit points.",
        /* 096 */ "A horrible taste overcomes you. You spend the next 1d10 minutes vomiting profusely.",
        /* 097 */ "All unlocked doors, windows and containers within 15 ft. of you magically open by themselves for the next 1d12 hours.",
        /* 098 */ "For the next 1d4 hours, you believe every creature you see is friendly to you. Whenever a creature is hostile towards you, you must succeed on an Intuition DC 18 check or you maintain your belief.",
        /* 099 */ "Your next damaging spell is guaranteed to hit its target.",
        /* 100 */ "You regain all spell slots.",
    ];
}]);