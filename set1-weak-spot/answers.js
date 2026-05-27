
//Answer 1
let a = true   // ✅ already a boolean
let b = false  // ✅ fixed (removed quotes)
let c = false  // ✅ already a boolean
let d = true   // ✅ fixed (removed quotes)
let e = 1      // ⚠️ this is a NUMBER, not a boolean
               // JavaScript treats 1 as "truthy" but it's not a real boolean
               // Proper fix: let e = true

//Answer 2
let isOnline = true
let isEmailVerified = true
let isBanned = false
let isAdmin = true
console.log(`User is online: ${isOnline} | Email verified: ${isEmailVerified} | Banned: ${isBanned} | Admin: ${isAdmin}`)


//Answer 3
let isNotificationsOn = false       //js was in front of the var name which is wrong and the system reads the boolean has a string cause of the '' used to on the boolean which is makes it truthy

if (isNotificationsOn) {
    console.log("Notifications are ON")
} else {
    console.log("Notifications are OFF")
}


//Answer 4
let itemName = "Bag"
let quantity = 3
let pricePerItem = 1500
let total = quantity * pricePerItem
console.log(`${quantity} ${itemName}s = ${total}`)


//Answer 5
let accountHolderName = "John Doe"
let accountNumber = "0123456789"  //it is stored as a string cause the numbers won't be used to solve any math problem
let balance = 45000
let isActive = true
console.log(`${accountHolderName} with account number of ${accountNumber} has a bal of ${balance}. Account active: ${isActive}`)


//Answer 6
let car = { brand: "Toyota", model: "Corolla", year: 2018, isAvailable: true }
console.log(car)           // ← step 1: print original (you skipped this)
car.year = 2022
console.log(car)           // ← step 2: print after year update
car.isAvailable = false
console.log(car)           // ← step 3: print after availability update
car.color = 'black'
console.log(car)           // ← step 4: print final version


//Answer 7
let tasks = ["Buy groceries", "Call mum", "Pay rent"]
tasks.push("Go to gym")
tasks.shift()
tasks.push("Read a book")
console.log(tasks)

//Answer 8
let countryNames = ['Nigeria', 'Spain', 'Japan', 'Korea', 'Ghana']  // arrays is mostly used forstoring a list of items

let student = { 
    name : 'John Doe',
    age : 12,
    grade : 9
}// object cause it is used to store information about something or someone. And is better to read and call t

// Just put the objects directly in the array — no variable names needed
let productPrices = [
    { price: 1000 },
    { price: 2000 },
    { price: 3000 },
    { price: 4000 }
]

let user = {
    userName : "Doe",
    email : "doe2026@gmail.com",
    isSubStatusActive : true
}// same reason with the object above

let profile = {
    name : "Tunde",
    age : 25,
    email : "tunde@gmail.com",
    isActive : true,
}
console.log(`Name: ${profile.name}`)
console.log(`Email: ${profile.email}`)


//Answer 9
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2018,
    isAvailable: true
}
car.year = 2022
car.isAvailable = false
car.color = 'black'
console.log(car)



//Answer 10
let products = [
    { name: 'Shoe',  price: 2500, inStock: true },
    { name: 'Purse', price: 3500, inStock: true },
    { name: 'Bag',   price: 5500, inStock: true }
]

console.log(products)                          // full array
console.log(products[0].name)                  // first product name
console.log(products[2].price)                 // last product price
console.log(products[1].inStock)               // second product inStock