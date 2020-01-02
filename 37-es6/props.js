// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  // let objName = {var1, var2, var3} => {var1: var1, var2:var2, var3:var3}
  // REACT: Body of your fetch

  let name = "Eric Kim"
  let age = 11
  let eating = ["junk", "garbage"]
  // name = evt.target.newEmojiName

  let eric = { name, age, eating }
  // let's make ⬆️ this object have some props!

  console.log(eric);





// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

// REACT: Controlled forms
// <input type="text" name="chicken" value="bawk bawk"/>
// { [evt.target.name] : evt.target.value }

  const whatIwantToDoMore = "sing";

  const theKeyThatIWantToPullOut = "sing"

  const newYearsResolution = {
    body: "Write code every day",
    [whatIwantToDoMore]: "more"
  }

  console.log(newYearsResolution);
  console.log( newYearsResolution[theKeyThatIWantToPullOut] )
