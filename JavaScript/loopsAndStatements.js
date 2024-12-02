//Conditions compare two values and run code accordingly. This is done using comparison operators.
//Comparison operators (>, >=, <, <=) allow you to compare values in your code. Greater than (>), greater than or equal to (>=), less than (<), and less than or equal to (<=), truly equal to (==), not equal to (!=), AND (&&), OR (||) are your comparison operators.

//If statements are instructions that tell your program to execute code IF a condition occurs.
var age = 12;
if (age > 10) {
    console.log("You are older than 10 years old");
}
//Because the variable age is greater than 10, it will log 'You are older than 10 years old' to the console. If age was set to 10 or lower, the code in the if statement would not run.

//Else statements can be added to an if statement to tell your program to do something if the condition is NOT met.
else {
    console.log("You are younger than 10 years old");
}
//If we were to set the variable 'age' to a lower number, the else statement would run.

//Else If statements are used to check more than one condition in an if-else loop.
if (age > 15) {
    console.log("You are older than 15 years old.");
}
else if (age > 10) {
    console.log("You are older than 10 years old, but younger than 15 years old.");
}
else {
    console.log("You are younger than 10 years old.");
}

//For Loops are used to repeatedly run a block of code a certain number of times. They have three parts - the initial counter, the conditional statement, and the increment.
var cost = 10;
for (counter = 0; counter <= cost; counter++) {
    console.log(counter);
    //The code in here is what runs every time the loop runs.
}
//At the end of each loop iteration, the counter adds one to itself via the 'counter++' increment.
//The counter starts at zero, and will be increased at the END of each iteration of the loop until it is greater than the variable cost, which is currently set to 10.
