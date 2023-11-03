// Destructure in object

// const {
//     firstName,
//     lastName,
//     email,
//     smiley,
//     power = "😂🥳😍🤣✔️💕"
// } = {
//     firstName: "Rahul",
//     lastName: "Borikar",
//     email: "rahul@gmail.com",
//     smiley: "🥳"
// }

// console.log(smiley); // Uncaught ReferenceError: smiley is not defined
// console.log(power);

const person = {
    name: "Ratan Tata",
    networth: "💰💰💰💰",
    house: "🏡",
    phrase: "He loves India",
    power: "❤️"
}

// console.log(person);

const {
    name, 
    networth, 
    house,
    power = "💫",
    skill = ["genius", "billionair", "philanthroprist"]   // Defaul value 
} = {
    name: "Ratan Tata",
    networth: "💰💰💰💰",
    house: "🏡",
    phrase: "He loves India",
    power: "🤖🤖"
}

console.log(networth, house, power, skill);