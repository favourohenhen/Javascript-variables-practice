// ===================================
// SET 1 — Practice Exercises Answers
// Topics: Booleans, Arrays, Objects
// Status: Complete ✅
// ===================================


//Answer 1
let firstName = "Marvellous";
let lastName = "Sunday"
console.log(firstName + " " + lastName)
console.log(firstName, lastName)
console.log(`${firstName} ${lastName}`)

//Answer 2
let age = 20;
age = 21;
console.log(age);

//Answer 3
let score = 0;
score = 10;
score = 25
console.log(score)

//Answer 4
const appName = "Mikoapp"
let versionNum = 1.2
let mode = "dark"
console.log(`${appName} ${versionNum} ${mode}`)

//Answer 5
var city = "Lagos";
var city = "Abuja";
console.log(city);


//Answer 6
let userName = "Marvellous Sunday"
const email = "marvellous2023@gmail.com"
let accountBalance = 2300
console.log(`User Name: ${userName} | Email: ${email} | Balance: $${accountBalance}`);

//Answer 7
let productName = "iPhone 15"
let price = 999
let storeName = "TechStore"
console.log(`The ${productName} costs $${price} and is available at ${storeName}.`)


//Answer 8
let itemName = "notebook"
let quantity = 3
let pricePerItem = 500
let total = quantity * pricePerItem
console.log(`${quantity} ${itemName}s at ₦${pricePerItem} each = ₦${total}`)


//Answer 9
let greet = "  hello, world!  "
console.log(greet.trim().length)
console.log(greet.toUpperCase())


//Answer 10
let temp = 32;
const fahrenheit = temp * 9 / 5 + 32
console.log(`Celsius: ${temp}, Fahrenheit: ${fahrenheit}`);


//Answer 11
let name = "faith"
let Age = 20
let Price = 500
let phoneNumber = "08012345678"
console.log(typeof (name))
console.log(typeof (Age))
console.log(typeof (Price))
console.log(typeof (phoneNumber))


//Answer 12
let isLoggedIn = false
isLoggedIn = true
console.log(`The user is logged in: ${isLoggedIn}`)


//Answer 13
let isEligbileToVote = aGe >= 18;
console.log(isEligbileToVote)


//Answer 14
let isDarkModeEnabled = true
let isNotificationsOn = false
let isPremiumUser = true
console.log(`Premium user: ${isPremiumUser} | Notification on: ${isNotificationsOn} | Dark mode enabled: ${isDarkModeEnabled}`)


//Answer 15
let cart = ['Fish', 'Milk', 'Spices', 'Rice']
console.log(cart[1])


//Answer 16
let contacts = ["Mum", "Sis", "Bro"]
contacts.push("Dad")       // add to end
contacts.shift()           // remove first item
console.log(contacts)      // print the array
console.log(contacts.length)


//Answer 17
let userProfile = ['Ade', 20, 200, true]
 console.log(`Name: ${userProfile[0]}`)
 console.log(`Age: ${userProfile[1]}`)
 console.log(`Account Balance: ${userProfile[2]}`)
 console.log(`Verifield: ${userProfile[3]}`)


//Answer 18
 let product = {
    name: 'Gift',
    price: 200,
    category: 'gowns',
    inStock: true,
}
console.log(product.price)
console.log(product)


//Answer 19
product.price = 300,
product.inStock = false,
product.discount = 10



//Answer 20
let users = [
    {
        name: 'Grace',
        email: 'grace2026@gmail.com',
        isPremium: 'true'
    },
    {
        name: 'Peace',
        email: 'peace2026@gmail.com',
        isPremium: 'false'
    }
    , {
        name: 'Faith',
        email: 'faith2026@gmail.com',
        isPremium: 'true'
    }
]
console.log(users[1].email)