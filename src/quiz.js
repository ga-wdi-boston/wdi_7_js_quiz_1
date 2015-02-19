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
    if(options){
      return true
    }else{
      return false
    };
};

// console.log(quiz.sleepIn({vacation: true}));
// console.log(quiz.sleepIn());


// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

var nearHundred = function(num){
  if( 89 < num && num< 100){
    return true;
  }else if(num < 90 || num > 99){
    return false;
  }else{
    return "Error: Please enter a number!";
  };
};

// console.log(nearHundred(95));
// console.log(nearHundred(89));
// console.log(nearHundred("two"));
// console.log(nearHundred("ninty"));

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

quiz.missingChar = function(str, ind){

  if(!(typeof(str) === 'string')){
    return "Error: Please enter a string!";
  }else{
    return str.slice(0, ind) + str.slice(ind+1, str.length);
  };
};

// console.log(quiz.missingChar("kittie", 1));
// console.log(quiz.missingChar(347, 1));

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

quiz.delDel = function(str){
  if(!(typeof(str) === 'string')){
    return "Error: Please enter a string!";
  }else{
    var ind=str.indexOf('del');
    return str.slice(0, ind) + str.slice(ind+3, str.length);
  };
}

// console.log(quiz.delDel("abdelcd"));
// console.log(quiz.delDel("xyz"));


// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
// var Word = function(str){
//    this.str = str;
//  }

//  Word.prototype = {
//    backAround: function(str){
//     if(!(typeof(str) === 'string')){
//       return "Error: Please enter a string!";
//     }else{
//       var out =  str[str.length-1] + str.slice(0,str.length-1);
//       return out;
//     }
//   }
// };


String.prototype.backAround = function(){
    // if(!(typeof(this) === 'string')){
    //   return "Error: Please enter a string!";
    // }else{
      var out =  this[this.length-1] + this.slice(0,this.length-1);
      return out;
    // };
  };

  console.log("cat".backAround());
//Last minute change to make the string an object. Not tested.
// console.log(backAround("cat"));
