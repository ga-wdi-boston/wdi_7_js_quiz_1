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
    //sleep in if it is not a weekday || if you are on vacation.
    // quiz.sleepIn() => false
    if(options == null || options == 'vacation' || options == 'weekend'){
        console.log("You may sleep in.")
        return false;
    } else if(options == 'weekday'){
        console.log("Wake up! You may NOT sleep in today.")
        return true;
    }

    // quiz.sleepIn({vacation: true}) => true
};

//if null or vacation or weekend, sleep in
quiz.sleepIn();
quiz.sleepIn('vacation');
quiz.sleepIn('weekend');

//else, do NOT sleep in
quiz.sleepIn('weekday');


// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!

var nearHundred = function(num){
    if(num >= 90 && num <=99){
        console.log('num is >= 90');
        return true;
    } else if (num <90){
        console.log('num is <90')
        return false;
    } else if (num == 'two'){
        console.log('Please enter a number!')
    }
};

nearHundred(52);
nearHundred(93);
nearHundred('two');

// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"

var delDel = function(string_to_del, orig_string){
    return orig_string.replace(string_to_del,'');
};

console.log(delDel('del', 'abdelcd'));
console.log(delDel('', 'xyz'));

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
