/*
create objects for each fighter with stats
create div in center where things move to when selected
use jquery to dynamically move elements to center and compare their stats
run some functions (not if else statements) to resolve conflict
store health of player fighter and run it into next battle
use map function to double the values in an array


*/

var Thorvald = {
    name: "Thorvald",
    health:150,
    attack:8,
    counter:12

} 
var Eirik = {
    name: "Eirik",
    health:120,
    attack:10,
    counter:15

} 
var Ulf = {
    Name: "Ulf",
    health:180,
    attack:8,
    counter:5

} 
var Magnus = {
    Name: "Magnus",
    health:100,
    attack:12,
    counter:20

} 

var attack = document.getElementById("attackButton");

/* click character to start
character moves to battleground using append? 
starting row array disappears and enemies move to enemy container
enemy backgrounds turn red as they move using jquery to alter css
Click attack button and jquery subtracts attack power from health
Write results to text area
attack increases next time
If enemy health runs out first, player can select new character
If player health runs out first, game is over and restart button appears
Once defeated, enemy disappears
Click another enemy and cycle continues 

*/

