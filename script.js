//global variable definitions 
 //this is taken from user input to determine total password length
// these variables are for maybe calculating the array amount....we'll see
            // var divide1
            // var divide2
            // var divide3
            // var divide4 
// new vars
// var totalDivide // technially not needed, this var is used to add the other divides up
// var newLength // this is the final array amount each used

// syncing to html id's of lenght: #password-length-total
//would you like lowercase #lowercase-answer
//upper? #uppercase-answer. number? #number-answer specal char? #specialchar-answer

var lengthOfPassword = document.querySelector("#password-length-total");
// these variables are taken from user input and will be used to determine how much of each array to include in final password
// var input1lower = document.querySelector("#lowercase-answer");
// var input2upper = document.querySelector("#uppercase-answer");
// var input3number = document.querySelector("#number-answer");
// var input4special = document.querySelector("#specialchar-answer"); 
var finalProduct = document.querySelector("#user-password-final");
var submitting = document.querySelector("#sign-up");

var array1lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var array2upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var array3number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var array4special = ["!", "@", "#", "$", "%", "^", "&", "*"];

// var totalOutput = "";
// var totalOutputNum = "";
// var totalOutputUpper = "";
// var totalOutputSpecial = "";


//When form is submitted....
submitting.addEventListener("click", function(event) {
    event.preventDefault();

    var totalOutput = "";
    var totalOutputNum = "";
    var totalOutputUpper = "";
    var totalOutputSpecial = "";

var userPassLength = document.getElementById("password-length-total").value;
var userLowerAnswer = document.getElementById("lowercase-answer").value;
var userUpperAnswer = document.getElementById("uppercase-answer").value;
var userNumberAnswer = document.getElementById("number-answer").value;
var userSpecialAnswer = document.getElementById("specialchar-answer").value;
// console.log(userPassLength);
// console.log(input1lower + input2upper + input3number + input4special);
var totalDivideHere = JSON.parse(userLowerAnswer) + JSON.parse(userUpperAnswer) + JSON.parse(userNumberAnswer) + JSON.parse(userSpecialAnswer);
console.log("password length: " + userPassLength);
console.log("sum of input: " + totalDivideHere);

if (userPassLength == totalDivideHere) {
    

for (i = 0; i < userLowerAnswer; i++) {
    var output = array1lower[Math.floor(Math.random() * 25)];
    totalOutput = totalOutput + output;
}
console.log(userLowerAnswer + " lower Case: " + totalOutput);


for (i = 0; i < userUpperAnswer; i++) {
    var output2 = array2upper[Math.floor(Math.random() * 25)];
    totalOutputUpper = totalOutputUpper + output2;
}
console.log(userUpperAnswer + " upper Case: " + totalOutputUpper);

for (i = 0; i < userNumberAnswer; i++) {
    var output3 = array3number[Math.floor(Math.random() * 8)];
    totalOutputNum = totalOutputNum + output3;
}
console.log(userNumberAnswer + " numbers: " + totalOutputNum);

for (i = 0; i < userSpecialAnswer; i++) {
    var output4 = array4special[Math.floor(Math.random() * 7)];
    totalOutputSpecial = totalOutputSpecial + output4;
}
console.log(userSpecialAnswer + " special characters: " + totalOutputSpecial);


//===============================================================
//test


// console.log(totalOutput + totalOutputNum);
var temporaryPassword = totalOutput + totalOutputUpper + totalOutputNum + totalOutputSpecial;
console.log("Temporary Password: " + temporaryPassword);
var newArray = temporaryPassword.split("");
// console.log(newArray);

shuffle(newArray);
console.log("Scrambled Password: " + newArray.join(""));
var finalPassword = newArray.join("");

// finalProduct.textContent = finalPassword;

var passwordText = "Password: ";
var span = document.createElement("div");
span.textContent = (passwordText + finalPassword);
// passwordText.setAttribute("strong");
finalProduct.appendChild(span);
finalPassword = "";
}

else {
    alert("You suck, make your numbers add up, moron")
}

});


function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
// will need to do a split me thinks
// // varification of unput: 
// if (input1lower + input2upper + input3number + input4special !== lenthOfPassword) {
//     alert("you suck. make your numbers add up, moron");
// };

// submitting.addEventListenr("click", event);
// event.preventDefault();