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
  var day = new Date();
  var n = d.getDay;
  if (vacation === true) {
    return true;
  } else {
    if (n != 5 && n != 6) {
      return false;
    } else {
      return true;
    };
  };
};

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(num){
  var n = num;
  if (typeof(n) === 'string'){
    alert('Please enter a number');
  } else {
    if ( n >= 90 && n <= 99){
      return true;
    } else {
      return false;
    }
  };
}

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(string, num){
  var str = string,
  n = num,
  a = '',
  b = '',
  sliced = '';
  if (typeof(str) === 'string'){
    alert('Please enter a string');
  } else {
    a = string.slice(0, n);
    b = string.slice(n + 1, string.length);
    return a + b;
    };
}

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(string){
  
}

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
quiz.delDel = function(string){
  var a = string,
  b = '',
  c = '',
  result = '';
  b = a.slice(string.length -1, string.length);
  c = a[0];
  result = b + c;
  return result;
}