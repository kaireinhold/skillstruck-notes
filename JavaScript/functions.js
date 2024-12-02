//If you have two functions with the same name, the later declaration of it will be treated as true. All instances of the function being called will be of that version of the function.

//To declare a function, you have to use the keyword 'function' before the function's name, same as how you use the keyword 'var' before a variable's name when declaring it.
function greeting() {
    return console.log("Hello world!");
}
//As is, this code will not return anything, nor will it show anything in the console. This is because the function is not being called.
greeting();
//Now the console shows 'Hello world!', since the code in the function 'greeting' was run when it was called.

//Parameters
//Function parameters are something that allows variable inputs into the function, that can change the output of the function.
function personalGreeting(name) {
    return console.log("Hello " + name + ". How are you?");
}
personalGreeting("Kai");

//Functions can also hold multiple parameters, allowing for more variability in each calling of a function.
function add(one, two) {
    return console.log(one + two);
}

add(5, 10);

//Return
//The return part of functions is important. It allows what is being returned by the function to be used elsewhere.
function askQuestion(question) {
    var response = prompt(question);
    return response;
}

var colorAnswer = askQuestion("What's your favorite color?");

console.log(colorAnswer);