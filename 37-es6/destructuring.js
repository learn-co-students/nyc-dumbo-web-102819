// What is destructuring and why would I want to do it?
// let {key1, key2, key3} = theObject

// REACT: This will be useful for destructuring props {}

  const mod3 = {
    name: "Dumbo Web 102819",
    population: 13,
    founded: 102819,
    languages: ["Ruby", "Rails", "Javascript"]
  }

  // const name = mod3.name;
  // const population = mod3.population;
  // const founded = mod3.founded;
  // const languages_mastered = mod3.languages

  const {name, population, founded, languages: languages_mastered, eric} = mod3

  // console.log(mod3)
  // console.log(languages_mastered, "||" , name,"||" , population, "||" ,founded)
  // console.log(eric) // -> `eric` is undefined





// Could I do it to an array?
  // const [index0, index1, index2, ...] = theArray

  const boroughNames = ["Brooklyn", "Manhattan", "Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, manhattanVar, , queensVar] = boroughNames
  // Skipped The Bronx

  // console.log(brooklynVar, manhattanVar, queensVar)





// Could I do it to the parameters of a function?

// Objects passed in as a parameter could be destructured in the definition of the function
// REACT: Functional Components receive props {}

  function greet( {name, fullName} ) {

    // const name = person.name;
    // const fullName = person.fullName;

    return `Hello, ${ name }! Your legal name is ${ fullName }.`
  }

  const me = {
    name: "Eric",
    fullName: "Hyeok Jung Kim",
    middleName: "Hank"
  }

  console.log(greet(me))
