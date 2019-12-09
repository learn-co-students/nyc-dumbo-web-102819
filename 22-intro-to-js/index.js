let arr = ["cat", "dogs", "bark", "meoww"]

function isItEven(element, index, originalArray) {

  if (element.length % 2 === 0){
    console.log("It is even.")
  } else {
    console.log("It is odd.")
  }
  return "This function returns this string."
}

isItEven(arr)





// let returnValue = isItEven(arr)
// returnValue = "This function returns this string."

// let returnValue2 = isItEven()
// throws an error on `undefined.length`

// let returnValue3 = isItEven
// returnValue3 is the function definition





let eachReturn = arr.forEach( isItEven )
let mappedReturn = arr.map( isItEven )
// isItEven is the callback (function defintion passed in as an argument for a function invocation)





arr.forEach(function(ele, index, originalArray){
  console.log("This is the element:", ele)
})

// let changedArray = arr.map( function(ele){
//   if (ele.length % 2 == 0) {
//     return "Even"
//   } else {
//     return "Odd"
//   }
// } )

debugger;
