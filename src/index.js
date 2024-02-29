// // write your code here

// - [ ] Describe what functions are and their central importance in JS
//functions are a way of grouping certain specific methods into 1 set of instructions 
// they help us write clean code and we can later use these functions 

// - [ ] Understand how to declare and call functions
// function bakeACake(fruit){
//     console.log("Gather ingredients")
//     console.log("Mix the ingrdients")
//     console.log(`bake the ${fruit} cake`)

// }
// bakeACake("apple")// we call the function by writing its name with a set of parenthesis at the end
// bakeACake("mango")

const doHomework = time => `I have ${time} to do my homework` // if there is only 1 parameter and return statment is on one line 
   

// console.log(doHomework("30 minutes"))
// - [ ] Review syntax differences between regular functions and arrow functions
// - [ ] Explain the difference between:
//     - Global scope
let day = 'Tuesday'
day = "Wednesday"
console.log(day)


//     - Function scope
//     - Global scope
// - [ ] Understand what it means that functions are first-class objects
// - [ ] Explain what a higher-order function is
// - [ ] Describe what arrays are and their central importance in JS
// - [ ] Understand how to iterate through an array using a `for` loop

// const burgers = ["Flatburger","Pizza Burger", "Cheeseburger"]

// for(let i = 0; i < burgers.length; i++){
//     console.log(burgers[i].toLowerCase())


//Deliverable 1
function welcomeToFlatburger(){
    console.log('Welcome to Flatburger')
}

//deliverable 2
const printGreeting = greeting => `${greeting} are you okay!`
    console.log(printGreeting("Hello"))


//deliverable 3
const getSum = (num1, num2) =>{
    return num1 + num2
}
console.log(getSum(45, 25))


//deliverable 4
function getSumString(sum,num1,num2){
    return `${num1} + ${num2} = ${sum(num1, num2)}`

}
console.log(getSumString(getSum,49,34))

//deliverable 5

const burgers = ["Flatburger", "Maple Bacon Burger", "Mushroom Burger"]

for(let burger = 0; burger < burgers.length; burger++){
    console.log(burgers[burger])
}