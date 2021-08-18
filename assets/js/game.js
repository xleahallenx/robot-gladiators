const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney= 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

const enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function() {
  window.alert("Welcome to Robot Gladiators!");



const promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

// if player choses to fight, then fight
if (promptFight=== "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + "has died!")
} else {
  window.alert(enemyName + "still has" + enemyHealth + "health left.");
  playerHealth = playerHealth - enemyAttack;

}

//remove player's health by subtacting the amount set in the enemy variable
console.log(
    enemyName + "attacked" + playerName + "." + playerName + "now has " + playerHealth + "health remaining."
);

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
  // if player did not chose option 1 or 2 prompt
} else {
  window.alert.apply("YOu need to pick a valid option. Try again!");
}
};


fight();