function lunch(num){
    var orders = 0;
    for (counter=0; counter<num; counter++ ){
        var lunch = prompt(alert("Are you buying or packing a lunch?"));
        if (lunch == "packing") {
        alert("Take a seat.");
        }
        else {
            alert("Order food.");
            orders += 1;
        }
  }
  alert("Number of students ordering: " + orders);
}
lunch(Number(prompt("How many people are eating lunch?")));