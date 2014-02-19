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
  var date = new Date();
  options[:vacation] === true || date.getDay() % 6 !== 0;
};

//  if(options[:vacation])return true;
//  else if(date.getDay() % 6 !== 0) return false;
//  else return true;

quiz.nearHundred = function(number) {
  if(90< number == number < 110) return true;
  else return false;
};

quiz.missingChar = function(string, missingchar) {
  string.slice(missingchar)
  return string;
};

quiz.delDel = function(string) {
  var newString = string.replace(/del/, '')
  return newString;
};


quiz.backAround = function(string) {
    var newestString = string.slice(-1) + string
    return newestString;
};
