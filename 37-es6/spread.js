// What is the spread operator and why would I want to use it?
// Spreading allows you to spread key-value pairs
// let newObject = {... theOldObject }
// The order matters in spreading (because the later ones take priority)

// REACT: Redux, adding stuff to the DOM

  const oldEric = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    showering: false,
    eating: ["junk", "garbage"]
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"]
  }

  const eric2020 = {
    ... oldEric,
    ... regularStandardsOfLiving,
    name: "Bob",
  }

  let newYearSameMe = {
    ...eric2020,
    lives: "In Queens"
  }

  // console.log("2020", eric2020);

  // console.log("new Year Same Me", newYearSameMe)
  // console.log(newYearSameMe === eric2020) //=> False





// Could I do it to an array?


  const bodyParts = ["head", "shoulders", "knees", "toes"];

  const song = [ ...bodyParts, ...bodyParts, "eyes", "ears", "nose", "mouth", ...bodyParts ]

  console.log(song);





// Could I do it to the parameters of a function?

  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }

  // canTakeFourArguments("head", "shoulders", "knees", "toes")
  canTakeFourArguments(...bodyParts)
