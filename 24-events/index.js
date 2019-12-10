// 1) Find the element that we care about
// 2) Add the event listener on that element using addEventListener

// element.addEventListener("event_type", function(evt){
//  WHAT DO YOU WANT TO DO WHEN THE event_type HAS FIRED?
  // Most likely, do some DOM Manipulation
// })


let tacoButton = document.querySelector("#taco")
// let tacoButton2 = document.getElementById("taco")
let emojisUl = document.querySelector("#blobs")
let newEmojiForm = document.querySelector("#emoji-form")



newEmojiForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  console.log(evt);
  console.log(evt.target);
  console.log(evt.target["emoji-with-a-dash"], evt.target.tristan);
  console.log(evt.target.tristan.value);

  // let theForm = evt.target
  // let theInput = theForm.tristan
  // let theInputValue = theInput.value

  let newEmoji = evt.target.tristan.value

  let newLi = document.createElement("li")
  newLi.innerText = newEmoji
  emojisUl.append(newLi)

  // evt.target.tristan.value = ""
  evt.target.reset()
})



tacoButton.addEventListener("click", function(evt){
  // 1) Get a blank sheet of paper
  // 2) Razzmatazz
  // 3) Find an appropriate place on the DOM

  let newLi = document.createElement("li")
  newLi.innerText = "🌮"
  emojisUl.append(newLi)
})
