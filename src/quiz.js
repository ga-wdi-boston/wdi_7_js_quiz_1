//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
  if (options === "saturday" || options === "sunday" || options === "vacation"){
    return true;
  }
  else
    return false;
}

console.log(quiz.sleepIn("vacation"));

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(number){
  if (number > 89 && number < 100){
    return true;
  }
  else if (number < 89 && typeof number === 'number') {
    return false;
  }
  else{
    console.log("Error: Please enter a number!");
  }
};

console.log(quiz.nearHundred(52));
console.log(quiz.nearHundred(93));
(quiz.nearHundred("2"));


// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(aString, indexNum){
  if (typeof aString != 'string'){
    return "Error: Please enter a string!";
  } else {
    var newString = aString.slice(0, indexNum) + aString.slice(indexNum + 1);
    return newString;
  }
};

console.log(quiz.missingChar("kittie", 1));
console.log(quiz.missingChar(347, 1));

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(stringIn){
  var stringOut = stringIn.replace('del', '');
  return stringOut;
};

console.log(quiz.delDel("abdelcd"));
console.log(quiz.delDel("xyz"));

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

var backAround = function(aString){
  var newString = aString.substr(0, aString.length-1);
  return newString;
};

console.log(backAround("cat"));
