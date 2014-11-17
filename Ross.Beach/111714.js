// JavaScript source code
var getToDaChoppa = function () {
    do {
        console.log("Beam me up!");
    } while (loopCondition);

};

getToDaChoppa();

var slaying = true;
var youHit = Math.floor(Math.random());
var damageThisRound = 1;
var totalDamage = 4;
while (slaying) {
    if (youHit) {
        totalDamage += damageThisROund
        if (totalDamage >= 4) {
            console.log("You slew the dragon!");
            slaying = false
        }
        else {
            youHit = Math.floor(Math.random());
        }
        console.log("You hit!");
    }
    else {
        console.log("You missed!");
    }
    slaying = false;
}

var programming = false;
var happy = function () {
    if (!programming) {
        return true;
    }
    else {
        return false;
    }

};

var user = prompt("What do you want to do?");
switch (user) {
    case 'eat':
        prompt("Eat what?");
        if ('food' && 'drink') {
            console.log("Have a good lunch!");
        } else {
            console.log("You're going to be hungry later.");
        }
        break;
    case 'sleep':
        prompt("Take a nap where?");
        if ('bed' || 'sofa') {
            console.log("Sleep well!");
        } else {
            console.log("Just sleep on the floor!");
        }
        break;
    case 'listen to music':
        prompt("What kind?");
        if ('pop' || 'rock') {
            console.log("Have fun!");
        } else {
            console.log("What a bore!");
        }
        break;
    default:
        console.log("Get a life!");
}

var myOwnObject = {
    stuff: 734
};

var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(303) 555-5555",
        address: ['One Apple Way', 'Redmond', 'WA', '98052']
    }
};
var list = function (friends) {
    for (var firstName in friends) {
        console.log(firstName);
    }
};

var search = function (name) {
    for (var firstName in friends) {
        if (friends[firstName].firstName === name) {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }
};