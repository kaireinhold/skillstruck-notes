//Arrays can hold multiple values, and even values of different data types can be in the same array.
var players = ["Grian", "Scar", "Pearl", "Gem"];
console.log(players);
var scores = [33, 37, 43, 28];
console.log(scores);
var mixed = ["Grian",33,"Scar",37,"Pearl",43,"Gem",28];
console.log(mixed);


//Accessing elements in an Array
//Indexing:
//The index of an item in an array is also its position in the array. Indexes start at 0, and count upwards. So, using the array named 'mixed' above, if we wanted to access the item 'Pearl' we would need to use the index [4] despite it being the fifth item in the array.
console.log(mixed[4]);
//You cannot index backwards by using negative indexes in JavaScript (such as [-2]). It will only give an output of Undefined.
console.log(mixed[-2]);
//If this was Python, that would return the item 'Gem'. Here, though, it returns undefined, which looks like an empty output in the console.

//Array Length:
console.log(mixed.length);
//This outputs the number of items in the array, counting from one.

console.log(mixed[mixed.length -2]);
//This outputs 'Gem', the second to last item in this array. Because length counts from one, you need to subtract one from the length number you get to make it correspond to the index of an item in the array.

//Adding to arrays
//Arrays can have items added to them, which is useful if you want to add items from user input or other functions.
mixed.push("Martyn",42);
//Now the array looks like ["Grian",33,"Scar",37,"Pearl",43,"Gem",28,"Martyn",42]
console.log(mixed);

//Arrays can also be created empty.
var winners = [];
console.log(winners); //Outputs undefined to the console.
winners.push("Grian", "Scott", "Pearl", "Martyn", "Scar", "Cleo");
console.log(winners); //Now outputs the array ["Grian","Scott","Pearl","Martyn","Scar","Cleo"]

//Removing from Arrays
//mixed.pop();
//var listener = mixed.pop();
//Pop can only remove the last item in the array, no matter what is put in the parentheses (think function with no parameters)

console.log(mixed);
//console.log(listener);

//Inserting into Arrays
winners.splice(6, 0, 'Joel');
console.log(winners);

//Changing elements in Arrays
var names = ["Nicole", "Justin", "Brian"];
names[1] = "Jill";
console.log(names);

//Converting Arrays to Strings
var stringArray1 = mixed.toString();
console.log(stringArray1);
console.log("The players and their scores are: " + stringArray1);