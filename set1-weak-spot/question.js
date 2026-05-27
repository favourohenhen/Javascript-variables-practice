// ===================================
// SET 1 — Weak Spot Exercises
// Topics: Booleans, Arrays, Objects
// Status: Complete ✅
// ===================================



// ❌ Booleans (you stored them as strings)

// Exercise 1 — True or false?
// Look at the code below. Without running it, identify which variables are real booleans and which are strings pretending to be booleans:
// jslet a = true
// let b = "false"
// let c = false
// let d = "true"
// let e = 1
// Then rewrite all of them as proper booleans.


// Exercise 2 — User status
// Create these four boolean variables with proper values (no quotes):

// isOnline — the user is currently active
// isEmailVerified — the user has verified their email
// isBanned — the user is not banned
// isAdmin — the user has admin access

// Print all four in one template literal sentence that reads naturally.


// Exercise 3 — Spot the bug
// This code is supposed to check if notifications are turned off, but it behaves unexpectedly. Find the bug and explain why it happens:
// jslet isNotificationsOn = "false"

// if (isNotificationsOn) {
//     console.log("Notifications are ON")
// } else {
//     console.log("Notifications are OFF")
// }
// Fix it so it works correctly.

// ❌ Numbers stored as strings

// Exercise 4 — Fix the receipt
// This code is broken. Find all the data type mistakes and fix them so the total prints correctly:
// jslet itemName = "Bag"
// let quantity = "3"
// let pricePerItem = "₦1500"
// let total = quantity * pricePerItem
// console.log(`${quantity} ${itemName}s = ${total}`)


// Exercise 5 — Bank account
// Create these variables with the correct data types:
// accountHolderName — a name
// accountNumber — something like "0123456789" (think about why this should NOT be a number)
// balance — an amount like 45000
// isActive — whether the account is active
// Print a bank statement using a template literal.



// ❌ Array methods — push, shift, concat

// Exercise 6 — Understand the difference
// Run this code and observe what prints. Then write a comment next to each console.log explaining what you see and why:
// jslet fruits = ["apple", "banana", "mango"]

// let result1 = fruits.concat("grape")
// console.log(fruits)    // what is fruits now?
// console.log(result1)   // what is result1?

// fruits.push("grape")
// console.log(fruits)    // what is fruits now?



// Exercise 7 — Task list manager
// You're building a to-do app. Start with this list:
// jslet tasks = ["Buy groceries", "Call mum", "Pay rent"]
// Do the following in order, printing the array after each step:
// Add "Go to gym" to the end
// Remove the first task
// Add "Read a book" to the end
// Print the total number of tasks remaining



// ❌ Array vs Object — knowing which to use

// Exercise 8 — Pick the right structure
// For each scenario below, decide if you'd use an array or an object and explain why in a comment. Then actually write the code:

// A list of 5 country names
// A single student's name, age, and grade
// A collection of 4 product prices
// A user's profile with username, email, and subscription status



// Exercise 9 — Fix the structure
// This code uses the wrong data structure. Identify the problem, then rewrite it correctly:
// js// Storing a person's profile
// let profile = ["Tunde", 25, "tunde@gmail.com", true]

// console.log(`Name: ${profile[0]}`)
// console.log(`Email: ${profile[2]}`)
// Hint: When you access data by position, bugs happen easily. What's a better way to store named information?



// ❌ Updating objects & array of objects
// Exercise 10 — Object lifecycle
// Do all of these step by step, printing after each step:
// js// Start with this:
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2018,
//     isAvailable: true
// }

// Print the full object
// Update year to 2022
// Set isAvailable to false
// Add a new property color with value "black"
// Print the updated object



// Exercise 11 — Array of objects
// Create an array called products with 3 objects inside it. Each product should have name, price (a number), and inStock (a real boolean). Then:

// Print the entire array
// Print the name of the first product
// Print the price of the last product
// Print whether the second product is in stock