//The console.log() function is how you display things in JavaScript to the console, much like a Python print() function.
console.log("Hello");
alert("Welcome");
var name = prompt("What is your name?");
//when you use the alert() function, it pops up a little window for the user.
//alert() and prompt() get priority over console.log(), no matter their order in the file itself. When a JavaScript file is run, the interpreter recompiles the file in the way it sees best for priority. This includes if functions are created later in the file, but called beforehand - this does not work for variables, though.