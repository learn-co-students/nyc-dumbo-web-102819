class Instructor extends Person {

  static allArray = []

  constructor(name, djName){
    console.log("THE NAME IS:", name);
    console.log("THE DJNAME IS:", djName);
    super()
    // super is only necessary because of the `extends`

    // `this` inside a constructor is the instance

    this.name = name
    this.djName = djName

    Instructor.allArray.push(this)
  }

  // instance methods in JS does not require 'function'
  introduce(){
    // `this` inside of an instance method is the instance
    return `Yo, I'm ${this.djName}.`
  }

  dance(){
    return "I am dancing."
  }

  eat(){
    let returnValueOfUpperFunction = super.eat()
    return returnValueOfUpperFunction.toUpperCase()
  }


  // functions defined with `static` are class methods
  static all(){
    return "All the instructors"
  }



}


// NICE TO KNOW STUFF FOR REACT
// 1) Classes in React extends another class
// 2) Instance functions in React care a LOT about the value of `this`
// 3) Constructors sometimes exist, which means we must use super()
// 4) Instances are created with <Instructor></Instructor> (instead of new, we wrap in <HTML/> tags)


// 5) FUNCTION DEFINITION vs FUNCTION INVOCATION

let ericObject = new Instructor("Eric", "E-Smooth")
let jackObject = new Instructor("Jack", "J-Roxx")

// Each instance has an object called __proto__
// The __proto__ object is shared amongst the instances

// The instance's __proto__ is the Class's prototype
































function globalIntroduction(){
  // console.log("hello");
  return `Yo, I'm ${this.djName}.`
}


let jack = {
  fullName: "Jack Hilscher",
  djName: "J-Roxx",
  introduce: globalIntroduction,
  stringOfIntroduction: globalIntroduction()
}

let randy = {
  fullName: "Randy Herasme",
  djName: "R-Kool",
  introduce: globalIntroduction
}

let eric = {
  legalName: "Hyeok Jung Kim",
  djName: "E-Smooth",
  introduce: globalIntroduction
}


// console.log(jack.introduce())
// console.log(eric.introduce())
// console.log(randy.introduce())

// console.log(eric.introduce);
// console.log(jack.introduce);

// console.log(eric.introduce() === jack.introduce())

// console.log(eric.introduce === jack.introduce)





















//
