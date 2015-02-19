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
  if (options.vacation || options === 'saturday' || options === 'sunday') {
    return true;
  } else {
    return false;
  }
}
//come back to this
console.log('Not on vacation means it is ' + quiz.sleepIn({vacation: false}) + " that you can sleep in");
console.log('On vacation means it is ' + quiz.sleepIn({vacation: true}) + " that you can sleep in");
console.log('Monday means it is ' + quiz.sleepIn("monday") + " that you can sleep in");
console.log('Sunday means it is ' + quiz.sleepIn("sunday") + " that you can sleep in");

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(number){
  if (number >= 90 && number <= 99) {
    return true;
  } else if (number <= 89) {
    return false;
  } else if (number >= 100) {
    return "to 100, and beyond!";
  } else {
    return "Error: Please enter a number!";
  }
}

console.log(quiz.nearHundred(52) + " for 52");
console.log(quiz.nearHundred(101) + " for 101");
console.log(quiz.nearHundred(93) + " for 93");
console.log(quiz.nearHundred("two") + " for 'two'");

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(string, index) {
  // if(typeof string != "string"){
  //   throw new Error("Please enter a string!");
  // } else {
  //   string = string.split("");
  //   string.splice(index,1);
  //   return string.join("");
  // }
  if (typeof string === 'string') {
    // makes a new string starting at the first argument, for the length of the second argument
    return string.substring(0, index) + string.substring(index + 1, string.length);
  } else {
    return "Error: Please enter a string!";
  }
};



console.log(quiz.missingChar("kittie", 1));
console.log(quiz.missingChar(347, 1));


// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(str){
  return str.replace('del', "");
}

console.log(quiz.delDel("abdelcd"));
console.log(quiz.delDel("xyz"));

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"

String.prototype.backAround = function(){
  return this[this.length-1] + this.slice(0,this.length-1);
};

console.log('cat'.backAround());
console.log('hello'.backAround());
