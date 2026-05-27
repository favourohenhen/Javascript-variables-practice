// var, let, const
// Exercise 12 — Choose the right keyword
// For each variable below, decide whether it should be var, let, or const and explain your choice in a comment:

// A user's age that will change on their birthday
// A website's URL that never changes
// A game's current level
// The value of Pi (3.14159)
// A shopping cart that gets items added and removed

// Exercise 13 — Scope trap
// Predict what each console.log will print before running the code. Then run it and check:
// jslet x = "outside"

// if (true) {
//     let x = "inside"
//     console.log(x)
// }

// console.log(x)

// Strings & Numbers
// Exercise 14 — String toolkit
// Store the string "javascript is awesome" in a variable. Using only that variable, produce the following outputs (one line each):

// "JAVASCRIPT IS AWESOME"
// "Javascript is awesome" (just the first letter capitalised)
// The total character count
// "javascript" (just the first word — look up .split())
// true (check if it includes the word "awesome")

// Exercise 15 — Number operations
// Create two number variables, a = 17 and b = 5. Calculate and print:

// Their sum, difference, product
// The result of dividing a by b (you'll get a decimal)
// The remainder when a is divided by b (use the % operator)
// Round the division result to 2 decimal places (look up toFixed())

// Exercise 16 — Invoice generator
// Build a simple invoice. Create variables for:

// Customer name
// 3 items with names and prices
// A 7.5% VAT rate (store it as 0.075)

// Calculate the subtotal, VAT amount, and grand total. Print a formatted invoice using template literals.

// Booleans
// Exercise 17 — Comparison results
// Without running the code first, write down what each line will print — true or false. Then verify:
// jsconsole.log(10 > 5)
// console.log(10 === "10")
// console.log(10 == "10")
// console.log(null === undefined)
// console.log(null == undefined)
// console.log(!"hello")
// console.log(!!"hello")
// Research the difference between == and ===. Write a comment explaining it in your own words.

// Exercise 18 — Access control
// Create variables for: isLoggedIn, isEmailVerified, isAdmin. Then write conditions (using && and ||) that print:

// "Full access" if the user is logged in AND verified AND an admin
// "Limited access" if logged in AND verified but NOT admin
// "Please verify your email" if logged in but NOT verified


// Arrays
// Exercise 19 — Array toolkit
// Start with:
// jslet numbers = [8, 3, 11, 1, 7, 5, 2]
// Using array methods, do the following (print after each step):

// Sort the numbers from lowest to highest
// Reverse the array
// Check if the number 11 is in the array (look up .includes())
// Find the index position of 7 (look up .indexOf())
// Create a new array of only the numbers greater than 5 (look up .filter())


// Objects
// Exercise 20 — Build a mini app's data
// This is how real data looks in a real app. Create an array called library containing 3 book objects. Each book should have:

// title (string)
// author (string)
// pages (number)
// isRead (real boolean)
// rating (number from 1–5)

// Then:

// Print the title of the first book
// Print the author of the last book
// Change the isRead value of the second book to true
// Add a genre property to the first book
// Print the full updated library array