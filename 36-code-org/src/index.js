const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainer.style.display = 'none'
  }
})



Adaptor.getAllBoxes()
.then(arrayOfBoxes => {
  arrayOfBoxes.forEach(box => {
    new JSBox(box)
  })
  JSBox.all[0].handleClick()
})


// NICE THINGS TO KNOW
// 1) React Components define the structure/event listeners (instances of a class)
// 2) Event Listeners in React must be arrow functions for binding purposes
// 3) React Components look a lot like innerHTML
// 4) Callbacks - they exist and must be known
// 5) Array manipulations (filter, map, sort, find)

// 6) Adaptors return promises that we can .then chain
