// Day Tuesday | Day 1
// LAB | JavaScript Basic Algorithms
// https://github.com/ironhack-labs/lab-javascript-basic-algorithms
// https://repl.it/@Fedduh/22-01-2019-tuesday-lesson

console.log("I'm Ready");

// 1-4 - Exercise \\
var hacker1 = "Fedde";
console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("What is your name, navigator?", "Mr Navigator");
console.log("The navigator's name is " + hacker2);

// 5 - comparing name length
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + " characters");
} else if (hacker2.length === hacker1.length) {
  console.log("You both got equally long names," + hacker2.length + "  characters");
}

// 6 - Loops \\
var nameDriver = "";
for (i = 0; i < hacker1.length; i++) {
  nameDriver += (hacker1[i].toUpperCase() + " ");
}
console.log(nameDriver);

// 7 - Loops \\
var nameNavigator = "";
for (i = 1; i <= hacker2.length; i++) {
  nameNavigator += (hacker2[hacker2.length - i]);
}
console.log(nameNavigator);

// 7 - loops (alternative method) \\
var nameNavigator2 = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  nameNavigator2 += hacker2[i];
}
console.log(nameNavigator2);

//-----------------------------------------------------------------//
// 8 - lexicographic \\
//-----------------------------------------------------------------//
// compares alphabetic order of the words
// a same name will be equal order (0)
// b compared to s will give a negative value (b is first)
var lex = hacker1.localeCompare(hacker2);

if (lex < 0) {
  // hacker1 (driver) name first
  console.log("The driver's name goes first");
} else if (lex > 0) {
  // hacker2 (nav) name first
  console.log("Yo, the navigator goes first");
} else if (lex === 0) {
  console.log("You got the same name :)");
}

//-----------------------------------------------------------------//
// 9 - Palindrome (version 1) \\
//-----------------------------------------------------------------//
// this version is tedious... below is version 2 which is simpler.
// version 1 was a nice exercise though.
// it does not work with input of only spaces (fixed in v2)
console.log("-- Assignment 9 - version 1 --");

var palInput = window.prompt("Input a piece of text to check if it's a palindrome", "Tacocat");

// remove spaces
var pal = "";
for (i = 0; i < palInput.length; i++) {
  if (palInput[i] != " ") {
    pal += palInput[i];
  }
}
console.log(pal);

// PSEUDO CODE
// check length, determine middle
// uneven: 9, then 4 and 4
// even: 8, then 4 and 4

// no value
if (pal.length === 0) {
  console.log("There was no text input");
} else if (pal.length % 2 === 0) {
  // even
  palHalf = (pal.length / 2);
} else {
  // uneven
  palHalf = ((pal.length - 1) / 2);
}

// make a var of the first half
// make a var of the last half reversed
var palFirst = pal.substring(0, palHalf);
// substring with no second argument, returns all after the start
var palLast = pal.substring(pal.length - palHalf);
var palLastRev = ""
for (i = palLast.length - 1; i >= 0; i--) {
  palLastRev += palLast[i];
}

// checks
console.log("first half is: " + palFirst);
console.log("second half is: " + palLast);
console.log("Reversed last is " + palLastRev);

// compare if they're equal
if (palFirst.toLowerCase() == palLastRev.toLowerCase()) {
  console.log("Yes it's a palindrome!");
} else {
  console.log("This is not a palindrome");
}

//-----------------------------------------------------------------//
// 9 - palindrome (version 2) \\
//-----------------------------------------------------------------//
// though this can be done easier :)
// just check if the word (without spaces) is the name backwards.. no need to split the word in 2

console.log("-- Assignment 9 - version 2 --");
var word = window.prompt("Input a piece of text to check if it's a palindrome", "Tacocat");

function reverseWord(word) {
  // A remove spaces
  var wordClean = "";
  for (i = 0; i < word.length; i++) {
    if (word[i] != " ") {
      wordClean += word[i];
    }
  }
  if (wordClean.length === 0) {
    // Error: no input. end function.
    return "No text value provided";
  } else {
    // text is valid
    // B reverse word
    var reverse = "";
    for (i = wordClean.length - 1; i >= 0; i--) {
      reverse += wordClean[i];
    }
    console.log("Word is: " + wordClean + " | reversed word is: " + reverse); // check
    // C compare
    var palCompare = "";
    if (wordClean.toLowerCase() == reverse.toLowerCase()) {
      return ("Yes it's a palindrome!");
    } else {
      return ("This is not a palindrome");
    }
  }
}

console.log(reverseWord(word));

//-----------------------------------------------------------------//
// 10 - Lorem Ipsum \\
//-----------------------------------------------------------------//
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sem in tellus tempus mollis. Nulla eget lobortis ipsum. Nunc faucibus vitae massa ut dignissim. Vestibulum lectus eros, aliquet ac suscipit vitae, suscipit non quam. Aliquam nec urna pharetra, laoreet dolor nec, egestas ligula. Pellentesque aliquet risus a auctor interdum. Aenean nec dapibus nunc, at iaculis ante. Mauris maximus posuere mauris id pellentesque. Praesent risus turpis, faucibus sit amet sodales vel, pretium quis justo. Aenean dictum cursus sapien, non imperdiet lectus dignissim at. Integer porttitor, quam molestie condimentum convallis, mi nulla consequat tortor, id ornare neque lacus id velit. Donec eget massa id ex aliquet eleifend id in arcu. Nullam posuere ante purus, vel mattis odio porta nec. Duis pretium lacus non risus malesuada, in dictum ligula euismod. Quisque volutpat lacus a mauris euismod rutrum. Nunc dolor lacus, venenatis et sagittis nec, venenatis et velit. Nunc rhoncus tortor vel arcu blandit efficitur eu et felis. Proin ultricies pharetra ante quis sollicitudin. Praesent in neque mauris. Cras scelerisque leo et ipsum posuere dictum. Morbi blandit, lectus lacinia interdum imperdiet, ex tortor tristique dui, eget porta erat libero ut nisi. Mauris tincidunt mi ut ligula pulvinar, eget gravida magna cursus. Integer fringilla tortor nec accumsan mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis, nisi vitae vehicula convallis, leo risus convallis justo, a rutrum purus lacus a tellus. Nam in mauris ut odio tincidunt fringilla. Donec et euismod nulla. Nam pretium neque lacinia quam placerat fermentum. In et ante orci. Aenean suscipit vulputate libero vel sagittis. Pellentesque sed felis magna. Duis auctor vehicula turpis in tempus. Curabitur vel porta tortor. Fusce rutrum ante eu felis egestas, at pharetra ante cursus. Donec bibendum luctus feugiat. Praesent ut eros sit amet felis pulvinar volutpat. Praesent volutpat est et nunc tempor, nec venenatis dolor pretium. Donec luctus nibh ac leo semper ultrices. Etiam non purus nunc."

//-----------------------------------------------------------------//
// 10 A - count number of words \\
//-----------------------------------------------------------------//
function countWords(string) {
  // clean string (trim removes leading and ending spaces)
  stringClean = string.trim();
  // no text or numbers?
  var checkWord = /[\w]/
  if (checkWord.test(stringClean) == false) {
    return "No proper string provided";
  }
  // first word has no leading space
  var amount = 1;
  for (i = 0; i < stringClean.length; i++) {
    // when space, count + 1
    if (stringClean[i] == " ") {
      amount += 1;
    }
  }
  return "Amount of words found: " + amount;
}

console.log("-- Assignment 10 - count words --");
console.log(countWords(lorem));

var abc = "  ;''    / >    "
console.log(countWords(abc));

//-----------------------------------------------------------------//
// 10 B - count number of times 'et' appears (as a seperate word) \\
//-----------------------------------------------------------------//
function countEt(string) {
  // clean string (trim removes leading and ending spaces)
  stringClean = string.trim();
  var amount = 0;
  var checkEt = /(\Wet\W)/i; // \W any nonalphanumeric character. i = case insensitive
  // go through variable
  for (i = 0; i < stringClean.length; i++) {
    stringPart = stringClean.substring(i, i + 4);
    if (checkEt.test(stringPart) == true) {
      //true 
      amount += 1;
    }
  }
  return "Amount of et found is " + amount;
}

console.log("-- Assignment 10 - count et --");
console.log(countEt(lorem));

var abcd = "Beter eet et eten et et etet" // 3
console.log(countEt(abcd));

