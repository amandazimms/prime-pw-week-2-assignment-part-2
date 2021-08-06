// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a variable called name and assign it to the string "Dane".
// we compare: if the name matches the string "Mary", we log the words "Hi, Mary!"...
// ...if not, we log a more general greeting, "How do you do?" (since it appears we don't know their name)
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// make a variable called secret, but don't assign it to anything yet
// make a variable called code, and assign it to the number 123.
// compare: if the code is equal to the number 123, assign the 'secret' variable to the string "super",
//    and assign the code variable to itself times two.
//    since code was in fact equal to 123, both of these things will happen. secret is now super, and code is now 246.
// compare: if the value of code is greater than the number 250, assign the string "duper" to the var "secret".
//    (since code's value is 246, which is less than 250, it won't pass this test and won't be assigned to "duper")
// finally, print to the console the value of secret, which should still be "super" as noted from above comment.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// make a variable isStudent and assign it to the boolean value true
// make a variable age and assign it to the number 34
// make a variable zip and assign it to the number 55407
// compare: if the value of isStudent is true, and the value of zip is greater than 8000, ...
// ...log "You're a student on the West Coast!"
// if the above was not true, compare: if the value of isStudent is false, or the age is less than 30...
// ... log "What are your hobbies?"
// if (both of) the above were not true, compare: if the value of isStudent is true...
// ... log "Welcome to Prime"
// if (all of) the above were not true, log "How about the weather?"
// in our case, the console will log "Welcome to Prime!", since isStudent === true, and zip < 8000.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* //FIX - these variables are swapped. Should be colorOne = 'blue' and colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - we should also set colorTwo to 'purple'.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - we should use && instead of || (and instead of or)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - Should be age >= minAge, though in this case the code would run the same.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

