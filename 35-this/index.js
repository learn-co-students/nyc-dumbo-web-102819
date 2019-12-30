let blueButton = new ButtonJS("Blue")
let redButton = new ButtonJS("Red")
let cyanButton = new ButtonJS("Cyan")
new ButtonJS("Green")

// Regular baseless functions (functions defined with the keyword `function`) get their `this` from where they're executed

// Arrow functions get their `this` from where they're defined


// Bind is a method called on a function definition that returns a function definition with `this` changed to the first argument of `bind`

// Call is a method called on a function definition that invokes a function with `this` changed to the first argument of `call` (The arguments can be supplied as individual arguments)

// Apply is a method called on a function definition that invokes a function with `this` changed to the first argument of `apply` (The arguments must be supplied in an array)


function regularBoringFunction(firstArgument, secondArgument){
  console.log(`${this.djName} says ${firstArgument} and ${secondArgument}`)
  console.log(this);
}

let globalIntroduction = () => {
  console.log(this);
  return `Yo, I'm ${this.djName}.`
}

let jack = {
  fullName: "Jack Hilscher",
  djName: "J-Roxx",
  introduce: globalIntroduction
}

let randy = {
  fullName: "Randy Herasme",
  djName: "R-Kool",
  introduce: globalIntroduction.bind( {djName: "Grandmaster Slamma Jamma"} )
}

let eric = {
  fullName: "Hyeok Jung Kim",
  djName: "E-Smooth",
  introduce: globalIntroduction
}


// Dan Abramov's Snippet 1
// eric.introduce()
// `this` -> eric object {}


// Dan Abramov's Snippet 2

let funcDef = eric.introduce
// funcDef()
// `this` -> window





// WHAT IS THIS?

let arr = [1, 4, 3, 4]

function callBack(firstArg){
  // console.log(firstArg);
  // console.log(this);
}

arr.forEach(callBack)
// this -> window


fetch("https://dog.ceo/api/breeds/image/random")
.then(callBack)
// this -> window


document.querySelector("h1").addEventListener("click", callBack)
// this -> event.currentTarget
