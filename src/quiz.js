//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
// var quiz = {};
// function trace(){ for(var i = 0, count= arguments.length; i < count; i++){console } }
// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
  if(options && options.vacation){
    return true;
  } else
    return false;
  }
};

// trace(quiz.sleepIn({vacation: true}), quiz.sleepIn());
// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

quiz.nearHundred = function(temp){
  if(temp > 90 && temp < 99){
    return true;
  } else if(temp < 90){
    return false;
  } else {
    return 'Error: Please enter a number!';
  }
};

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!


quiz.missingChar = function(string, index) {
  if (typeof string === 'string') {
    return string.substring(0, index) + string.substring(index + 1, string.length);
  } else {
    return "Error: Please enter a string!";
  }
};


// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(str){
  return str.replace(/del/g, '');
};
// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
quiz.backAround = function(str){
  var num = str.substr(str.length - 1);
  return num + str.slice(0, str.length -1);
};

String.prototype.backAround = function(){
  return  this[this.length-1] + this.slice(0,this.length-1);
}
