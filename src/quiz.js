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
// quiz.sleepIn = function(options) {
// };

quiz.sleepIn = function(options){
  if (options.day === 'saturday' || options.day === 'sunday' || options.vacation === true){
    return true;
  } else {
    return false;
  }
};

console.log(quiz.sleepIn({vacation: false, day:'monday'}));
console.log(quiz.sleepIn({vacation: true, day:'monday'}));
console.log(quiz.sleepIn({vacation: false, day:'sunday'}));
console.log(quiz.sleepIn({vacation: true, day:'saturday'}));

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(x){
  if (typeof x !== 'number'){
    return "Error: Please enter a number!";
  } else if (x < 89){
    return false;
  } else {
    return true;
  }
};
console.log(quiz.nearHundred('cat'));
console.log(quiz.nearHundred(91));
console.log(quiz.nearHundred(87));

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(string, index){
  if (typeof string !== 'string'){
    return "Error: Please enter a string!"
  } else {
    return string.slice(0, index) + string.slice(index+1);
  }
};
console.log(quiz.missingChar("kittie", 1));
console.log(quiz.missingChar(7,1));

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(string){
  return string.replace('del', '');
};

console.log(quiz.delDel("abdelcd"));
console.log(quiz.delDel("xyz"));

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

quiz.backAround = function(string){
  string = string + string[0];
  return string.substring(1);
};
console.log(quiz.backAround("cat"));
