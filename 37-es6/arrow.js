// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?
// 1) Arrow Function
// 2) Single Lined
// 3) No curlies

// EXCEPTION:
// Your functions are wrapped with parentheses

let returnsChicken = () => ({name: "Chicken"})

console.log(returnsChicken())
console.log(returnsChicken);







let arrayOfNumbers = [100, 23, 41, 192, 231]
console.log("ORIGINAL", arrayOfNumbers);





// ******* MAP
// REACT: Update an object

// map - callBack must return how you want to change the element
const doubleNumber = (number) => number * 2

const doubledArray = arrayOfNumbers.map(doubleNumber)

// REACT: [{}, {}, {}].map(obj => <html/>)


console.log("MAP", doubledArray);
// *******





// ******* FILTER

// filter - callBack must return a boolean/condition
// REACT: Deleting an object

let evenNumber = (num) => num % 2 === 0
let allEvenNumbers = arrayOfNumbers.filter(evenNumber)
// arrayOfNumbers.filter(num => {return num % 2 === 0 })

let firstEvenNumber = arrayOfNumbers.find(evenNumber)
console.log("FILTER", allEvenNumbers);
console.log("FIND", firstEvenNumber);
// *******






// ******* SORT

// sort - callback must return a number
// Sort is destructive

let newArrayOfNumbers = [...arrayOfNumbers]
newArrayOfNumbers.sort((num1, num2) => num1 - num2)
// ASC

// newArrayOfNumbers.sort((num1, num2) => num2 - num1)
// DESC

let animals = ["zebra", "aardvark", "penguin", "cat", "dog"]
animals.sort((animal1, animal2) => animal1.localeCompare(animal2))
// ASC

let people = [{name: "Eric"}, {name: "Randy"}, {name: "Jack"}]
people.sort((person1, person2) => person1.name.localeCompare(person2.name))


console.log("SORT", newArrayOfNumbers);
console.log("ANIMALS", animals);
console.log("PEOPLE", people)
// *******
