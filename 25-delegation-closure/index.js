// 1) Find the element that we care about
// 2) Add the event listener on that element using addEventListener

// element.addEventListener("event_type", function(evt){
  // Most likely, do some DOM Manipulation
// })


let tacoButton = document.querySelector("#taco")
let emojisUl = document.querySelector("#blobs")
let newEmojiForm = document.querySelector("#emoji-form")



newEmojiForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  let newEmoji = evt.target.emoji.value
  // let newEmoji = evt.target["emoji-with-a-dash"]

  let newLi = document.createElement("li")
  newLi.innerText = newEmoji
  emojisUl.append(newLi)

  // evt.target.reset()
})



tacoButton.addEventListener("click", function(evt){
  let newLi = document.createElement("li")
  newLi.innerText = "🌮"
  emojisUl.append(newLi)
})
