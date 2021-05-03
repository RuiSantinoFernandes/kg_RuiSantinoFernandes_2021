// Rui Fernandes - Stevens Institute of Technology - Kargo Summer 2021 Internship
/*Source Help - https://medium.com/coding-at-dawn/how-to-convert-an-array-to-a-string-with-commas-in-javascript-79e212506c2, 
https://www.w3schools.com/jsref/jsref_foreach.asp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt */

// Arguements to run
var Arg = process.argv.slice(2);

// Text array for conversion
var Num = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

// Holds text equivalent of numbers
var Texts = [];

// Loop counter
var i = 0;

// For each number
Arg.forEach(function (number) {
    
    sp = "";

    // Split the number
    inNum = number.split("");
    // For each of the digits
    inNum.forEach(function(digit) {
        // Appending the string equivalent to sp
        sp += Num[parseInt(digit)];
    })
    // Add sp to Texts array
    Texts[i] = sp;
    i++;
})

// Output Texts by joining
console.log(Texts.join(","))