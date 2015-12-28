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
// You are *not* passing in today's date as an argument to this function
// Inside the function you will have to determine the day of the week.
// The function will be impure and will return different results on the weekends!
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
}

// no idea what is being asked here

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

var nearHundred = function(num){
  if (num > 89 && num < 99){
    return true;
  }else if (num < 89){
    return false;
  }else{
    return "please enter a number!";
  };
};
// console.log(nearHundred("two"))

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

var missingChar = function(string, num){
  if (typeof(num) === 'string'){
    return "Error: Please enter a string!";
  } else {
    (newString = string.slice(num, num +1));
    return newString;
  };
};
console.log(missingChar("bob", 1))

// only retuns letter trying to remove

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

delDel = function(string1){
  pos1 = string1.search("del");
    if (true){
      var string2 = string1.slice(pos1, pos1 + 3);
      return string2;
    }else {
      return string1;
    };
};

console.log(delDel("bobdel"));

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
