var adventureHistoryArray = [];
var healthHistoryArray = [100];
function playGame() {
    var health = 100;

    while (health > 0) {
        var answer = prompt("What would you like to do? a) Slay the dragon, b) Rescue your friend, c) Steal the magic wand, or q to quit");
	if (answer == "a") {
      	    health -= 50;
      	    alert("While you successfully slayed the dragon, you got some bad injuries in the process costing you 50 health points. Your new health score is: " + health);
            adventureHistoryArray.push("Slay the dragon");
            healthHistoryArray.push(health);
        
        } else if (answer == "b") {
            health -= 20;
  	    alert("You battled the goblins and got some dagger wounds in order to save the princess. Your new health score is: " + health);
          adventureHistoryArray.push("Rescue your friend");
          healthHistoryArray.push(health);
        } else if (answer == "c") {
  	    health += 50;
  	    alert("You stole a magic wand that has healing powers. Your new health score is: " + health);
        adventureHistoryArray.push("Steal the magic wand");
        healthHistoryArray.push(health);
        } else if (answer == "q") {
            health -= health;
            healthHistoryArray.push(health);
        } else {
            alert("Invalid answer");
        }
    }
    alert("Game Over");
    console.log(adventureHistoryArray);
    console.log(healthHistoryArray);

}

playGame();