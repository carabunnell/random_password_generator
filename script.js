
// var lengthOfPassword = document.querySelector("#password-length-total");

var finalProduct = document.querySelector("#user-password-final"); //used at end of code
var submitting = document.querySelector("#sign-up"); //used at end of code
var msgDiv = document.querySelector("#msg"); // is referenced in line 34

//=============================ARRAYS==========================
var lowerArray = "abcdefghijklmnopqrstuvwxyz"; // temp array
var array1lower = lowerArray.split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // temp array
var array2upper = upperArray.split("");
var numberArray = "123456789";
var array3number = numberArray.split(""); // temp array
var specialArray = "!@#$%^&*";
var array4special = specialArray.split(""); // temp array

//=====================FUNCTION FOR SCAMBLING PASSWORD=========
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {        // While there are elements in the array // Pick a random index
        index = Math.floor(Math.random() * ctr);
        ctr--;               // Decrease ctr by 1
        temp = arra1[ctr];   // And swap the last element with it
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

//======================FUNCTION FOR ERROR/SUCCESS MSG=========================
function confirmNotice(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

//=============================FORM SUBMIT=====================
submitting.addEventListener("click", function(event) {
    event.preventDefault();

    var totalOutput = "";  // variable used in for loop
    var totalOutputNum = "";  // variable used in for loop
    var totalOutputUpper = "";  // variable used in for loop
    var totalOutputSpecial = "";  // variable used in for loop

        //.................. gathering input from html elements
var userPassLength = document.getElementById("password-length-total").value;
var userLowerAnswer = document.getElementById("lowercase-answer").value;
var userUpperAnswer = document.getElementById("uppercase-answer").value;
var userNumberAnswer = document.getElementById("number-answer").value;
var userSpecialAnswer = document.getElementById("specialchar-answer").value;

        //...................VERIFYING USER INPUT
var totalDivideHere = JSON.parse(userLowerAnswer) + JSON.parse(userUpperAnswer) + JSON.parse(userNumberAnswer) + JSON.parse(userSpecialAnswer);
console.log("PASSWORD LENGTH: " + userPassLength);
console.log("SUM OF USER INPUT: " + totalDivideHere);

if (userPassLength == totalDivideHere) {
    confirmNotice("success", "you're awesome");
    
        // ......................GETTING RANDOM PASSWORD
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

        // ...........................creating temp password, calling scramble function, outputing password
var temporaryPassword = totalOutput + totalOutputUpper + totalOutputNum + totalOutputSpecial;
console.log("Temporary Password: " + temporaryPassword);
var newArray = temporaryPassword.split("");

shuffle(newArray);
console.log("Scrambled Password: " + newArray.join(""));
var finalPassword = newArray.join("");


var passwordText = "Password: ";
var span = document.createElement("div");
span.textContent = (passwordText + finalPassword);
finalProduct.appendChild(span);
finalPassword = "";
}
        // ............................if user input is not valid
else {
    confirmNotice("error", "you suck");
}

});