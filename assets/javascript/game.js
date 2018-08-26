/*
create objects for each fighter with stats
create div in center where things move to when selected
use jquery to dynamically move elements to center and compare their stats
run some functions (not if else statements) to resolve conflict
store health of player fighter and run it into next battle
use map function to double the values in an array


*/

var thorvald = {
    name: "Thorvald",
    health: 150,
    attack: 8,
    bonus: 8,
    counter: 12,
    picture: "assets/images/thorvald.jpg"

} 
var eirik = {
    name: "Eirik",
    health: 120,
    attack: 10,
    bonus: 10,
    counter: 15,
    picture: "assets/images/eirik.png"

} 
var ulf = {
    name: "Ulf",
    health: 180,
    attack: 8,
    bonus: 8,
    counter: 5,
    picture: "assets/images/ulf.jpg"

} 
var magnus = {
    name: "Magnus",
    health: 100,
    attack: 12,
    bonus: 12,
    counter: 20,
    picture: "assets/images/magnus.jpg"

} 

var attack = document.getElementById("attackButton");
var restart = document.getElementById("restartButton");
var character = {};
var enemy = {};

attackerSelect = false
enemySelect = false
character = {};
enemy = {};
gameOver = false;

function selectCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.attack = chosenCharacter.attack;
    character.counter = chosenCharacter.counter;
}

function selectEnemy(chosenEnemy) {
    enemy.name = chosenEnemy.name;
    enemy.health = chosenEnemy.health;
    enemy.attack = chosenEnemy.attack;
    enemy.counter = chosenEnemy.counter;
}

function moveEnemy() {
    $(".charChoice").removeClass("charChoice").addClass("charEnemy")
    //$("#enemyRow").append($(".charEnemy"))
}

$("#restartButton").hide();
//$("#enemyRow").hide();
$("#attackButton").prop('disabled', true);

$("#thorvaldBox").click(function() {   
    $("#attackButton").prop('disabled', false);
    if (attackerSelect === false) {
        selectCharacter(thorvald);
        attackerSelect = true;
        $("#thorvaldBox").removeClass("charChoice").addClass("chosenCharacter");
        $("#battleCharacter").append($("#thorvaldBox").clone(true));
        $("#thorvaldBox").css("visibility", "hidden");
        moveEnemy();
    } else if ((attackerSelect === true) && (enemySelect === false)) {
        selectEnemy(thorvald);
        enemySelect = true;
        $("#thorvaldBox").removeClass("charEnemy").addClass("chosenEnemy");
        $("#battleEnemy").append($("#thorvaldBox").clone(true));
        $("#thorvaldBox").css("visibility", "hidden");

    }

})
$("#eirikBox").click(function() {    
    $("#attackButton").prop('disabled', false);
    if (attackerSelect === false) {
        selectCharacter(eirik);
        attackerSelect = true;
        $("#eirikBox").removeClass("charChoice").addClass("chosenCharacter");
        $("#battleCharacter").append($("#eirikBox").clone(true));
        $("#eirikBox").css("visibility", "hidden");

        moveEnemy();
    } else if ((attackerSelect === true) && (enemySelect === false)) {
        selectEnemy(eirik);
        enemySelect = true;
        $("#eirikBox").removeClass("charEnemy").addClass("chosenEnemy");
        $("#battleEnemy").append($("#eirikBox").clone(true));
        $("#eirikBox").css("visibility", "hidden");

    }

})
$("#ulfBox").click(function() {    
    $("#attackButton").prop('disabled', false);
    if (attackerSelect === false) {
        selectCharacter(ulf);
        attackerSelect = true;
        $("#ulfBox").removeClass("charChoice").addClass("chosenCharacter");
        $("#battleCharacter").append($("#ulfBox").clone(true));
        $("#ulfBox").css("visibility", "hidden");

        moveEnemy();
    } else if ((attackerSelect === true) && (enemySelect === false)) {
        selectEnemy(ulf);
        enemySelect = true;
        $("#ulfBox").removeClass("charEnemy").addClass("chosenEnemy");
        $("#battleEnemy").append($("#ulfBox").clone(true));
        $("#ulfBox").css("visibility", "hidden");

    }

})
$("#magnusBox").click(function() {    
    $("#attackButton").prop('disabled', false);
    if (attackerSelect === false) {
        selectCharacter(magnus);
        attackerSelect = true;
        $("#magnusBox").removeClass("charChoice").addClass("chosenCharacter");
        $("#battleCharacter").append($("#magnusBox").clone(true));
        $("#magnusBox").css("visibility", "hidden");

        moveEnemy();
    } else if ((attackerSelect === true) && (enemySelect === false)) {
        selectEnemy(magnus);
        enemySelect = true;
        $("#magnusBox").removeClass("charEnemy").addClass("chosenEnemy");
        $("#battleEnemy").append($("#magnusBox").clone(true));
        $("#magnusBox").css("visibility", "hidden");

    }

})

$(attack).click(function() {
    if (attackerSelect && enemySelect && !gameOver) {
        enemy.health = enemy.health - character.attack;
        $(".chosenEnemy").find(".health").html("Health: " + enemy.health);
        $("#textBox").html("<p>You attacked " + enemy.name + " for " + character.attack + " damage.</p>")
        character.attack = character.attack + character.bonus;
    
        if (enemy.health > 0) {
            character.health = character.health - enemy.attack;
            $(".chosenCharacter").find(".health").html("Health: " + character.health);
        }
        if (character.health > 0) {
            $("#textBox").html("<p>You were attacked by " + enemy.name + " for " + enemy.attack + " damage.</p>")
        } else {
            gameOver = true;
            $("#textBox").html("<p>You have been defeated. On to Valhalla!</p>");
            $("#restartButton").show();
        }}
            
    else {
        enemySelect = false
        victory++
        $("#textBox").html("<p>You have defeated " + enemy.name + ". Choose another oppponent.</p>")

        if (victory === 3) {
            gameOver = true;
            $("#textBox").html("<p>You have sent all of your enemies to Valhalla! Time for mead!</p>");
            $("#restartButton").show();
        }
    }

    if (!attackerSelect && !gameOver) {
        $("#textBox").html("<p>Please select a viking to attack with.</p>");
    }

    if (!enemySelect && !gameOver) {
        $("#textBox").html("<p>Please select an opponent.</p>")

    }
})





