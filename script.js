// function promptMe() {
//     var pwdChar = prompt("How many characters would you like your password to be?");
// }
// console.log(pwdChar)

var pwdCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwdLow = "abcdefghijklmnopqrstuvwxyz";
var pwdNum = "0123456789";
var pwdSpec = "!@#$%^&*()";

var pwdCapArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var pwdLowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var pwdNumArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var pwdSpecArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var pwd = [];


//This may or may not be right
// var randPassword = Array(pwdChar).fill(pwdCap).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');

// Capture amount of characters the person wants
// I did up above

// Brings up prompt and stores password character value
//NEED TO ADD MINIMUM LIMIT

function promptMe() {
    //Trying to get the box to clear when button is hit again
    var pwd = [];
    document.getElementById("password").innerHTML = [];

    var pwdChar = prompt("How many characters would you like your password to be?");
    console.log(pwdChar);


    // Confirms
    var includeSpec = confirm("Click 'Okay' to include special characters");
    var includeNum = confirm("Click 'Okay' to include numbers");
    var includeCap = confirm("Click 'Okay' to include upper case letters");
    var includeLow = confirm("Click 'Okay' to include lower case letters");

    // FUNCTIONS
    function one(a) {
        for (var i = 0; i < pwdChar; i++) {
            pwd.push(a[Math.floor(Math.random() * a.length)]);
            // for the end in the line above, can you say random() * a.length??
            document.getElementById("password").innerHTML = pwd.join("");
        }
    }
    function two(a, b) {
        for (var i = 0; i < pwdChar; i++) {
            pwd.push(a[Math.floor(Math.random() * a.length)]);
            pwd.push(b[Math.floor(Math.random() * b.length)]);
            document.getElementById("password").innerHTML = pwd.join("").slice(pwdChar);
        }
    }

    function three(a, b, c) {
        for (var i = 0; i < pwdChar; i++) {
            pwd.push(a[Math.floor(Math.random() * a.length)]);
            pwd.push(b[Math.floor(Math.random() * b.length)]);
            pwd.push(c[Math.floor(Math.random() * c.length)]);
            document.getElementById("password").innerHTML = pwd.join("").slice(pwdChar).slice(pwdChar);
        }
    }
    function four(a, b, c, d) {
        for (var i = 0; i < pwdChar; i++) {
            pwd.push(a[Math.floor(Math.random() * a.length)]);
            pwd.push(b[Math.floor(Math.random() * b.length)]);
            pwd.push(c[Math.floor(Math.random() * c.length)]);
            pwd.push(d[Math.floor(Math.random() * d.length)]);
            document.getElementById("password").innerHTML = pwd.join("").slice(pwdChar).slice(pwdChar).slice(pwdChar);
        }
    }

    // Start from all 5 = TRUE --> to only 1 being TRUE
    // Will most likely need to incorporate splicing into the "multiple" scenarios

    if (includeSpec && includeNum && includeCap && includeLow) {
        four(pwdSpecArray, pwdNumArray, pwdCapArray, pwdLowArray);
    }
    else if (includeSpec && includeNum && includeCap) {
        three(pwdSpecArray, pwdNumArray, pwdCapArray);
    }
    else if (includeSpec && includeNum && includeLow) {
        three(pwdSpecArray, pwdNumArray, pwdLowArray);
    }
    else if (includeSpec && includeCap && includeLow) {
        three(pwdSpecArray, pwdCapArray, pwdLowArray);
    }
    else if (includeNum && includeCap && includeLow) {
        three(pwdNumArray, pwdCapArray, pwdLowArray);
    }
    else if (includeSpec && includeNum) {
        two(pwdSpecArray, pwdNumArray);
    }
    else if (includeSpec && includeCap) {
        two(pwdSpecArray, pwdCapArray);
    }
    else if (includeSpec && includeLow) {
        two(pwdSpecArray, pwdLowArray);
    }
    else if (includeNum && includeLow) {
        two(pwdNumArray, pwdLowArray);
    }
    else if (includeCap && includeLow) {
        two(pwdCapArray, pwdLowArray);
    }
    else if (includeNum && includeCap) {
        two(pwdNumArray, pwdCapArray);
    }
    else if (includeSpec) {
        one(pwdSpecArray);
    }
    else if (includeNum) {
        one(pwdNumArray);
    }
    else if (includeCap) {
        one(pwdCapArray);
    }
    else if (includeLow) {
        one(pwdLowArray);
    }
}

    // function one (a) {
    //     for (var i = 0; i < pwdChar; i++) {
    //     pwd.push(a[Math.floor(Math.random() * pwdChar)]);
    //     document.getElementById("password").innerHTML = pwd.join("");
    // }

        // ****TAKE ADVANTAGE OF "PUSH" method in arrays -> to tack on to end of an array
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

        // **** Also take advantage of Merging Arrays
        // https://www.w3schools.com/js/js_array_methods.asp

// "Click Okay to include using special characters"
// These will be confirms, not prompts

//Copy to clipboard
// ****** This is a bonus, but should still try to do it

