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

quiz.sleepIn = function(day) {

  var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "vacation"];

  for (i = 0; i < weekday.length; i++){
    if (weekday[i] == today){
      return true;
    } else {
      return false;
    };
  }
}


var today = "Monday";


console.log(quiz.sleepIn(today))


// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

function nearHundred(number) {
  if (number < 89) {
    return false;
  } else if (number > 100){
    return "Please enter a number less than 100";
  } else if (number < 100){
    return true;
  } else {
    return "Error: Please enter a number!";
  };
};

console.log(nearHundred('two'));
console.log(nearHundred('52'));
console.log(nearHundred('105'));
console.log(nearHundred('93'));
// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

// function missingChar(string){
//   string.replace(substr)
// };

// str.replace(regexp|substr, newSubStr|function[, flags])

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

// delDel('World', 'Web', 'Brave New World');

// function delDel(string) {
//   for (var i = 0; i < string.length; i++){
//     if (string.substring(i, i + string.length) == string) {
//       newstring string.substring(0, i);
//     }
//   }
// }


// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

function backAround(string){
  var myLength = string.length;
  var lastChar = string.slice(1, -1);
  return lastChar;
}
// var str2 = str1.slice(4, -2);
// backAround("cat");

  console.log("last char is " + backAround("cat"));
