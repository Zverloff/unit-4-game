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
    counter: 12,
    picture: "assets/images/thorvald.jpg"

} 
var eirik = {
    name: "Eirik",
    health: 120,
    attack: 10,
    counter: 15,
    picture: "assets/images/eirik.png"

} 
var ulf = {
    Name: "Ulf",
    health: 180,
    attack: 8,
    counter: 5,
    picture: "assets/images/ulf.jpg"

} 
var magnus = {
    Name: "Magnus",
    health: 100,
    attack: 12,
    counter: 20,
    picture: "assets/images/magnus.jpg"

} 

var attack = document.getElementById("attackButton");
var restart = document.getElementById("restartButton");

$("#restartButton").hide();
$("#enemyRow").hide();
$("#battle").hide();

$(document).ready(function(){


    
})

// Questions - 1. Do I need to dynamically create my characters or can I create in html and move them in jquery?
// 2. If I do create them, how to I style the way they show up?
// 3. How do I make it fill with the info of my object? 
// 4. How do I make my characters clickable?


// Character selection

//click on character


//character movies to battle area
$("#battle").show();
$(character).appendTo("#battle");

//enemies move to other enemy area and backgorund turns red
$(enemies).clone().appendTo("#enemyRow");
$("#enemyRow").hide();
//change enemies class to something so only thier backgorund color changes?
$(".char").css("background-color", "red");

//Click attack button to resolve combat
$("#attackButton").click(function(){
// enemy health - hero attack;

// hero health - enemy counter attack

//update text window
$("#textBox").html("You attacked " + defenderAtt + "for " + attackerAtt + "points of damage.")
//I want the box to continue on through the fight, keeping record
//create variables for attacked and defender health. Write results of comabt to them each time button is clicked
//attack increases

if (attackerHP === 0) {
    //display you lose in texta area in bold
    $("#restartButton").show();
}
else (enemyHP === 0) {
    $("#textBox").html("You win! Now select your next opponent.");
    //  display you win in text area in bold
    // offer up new characters to fight next
    
};

});



