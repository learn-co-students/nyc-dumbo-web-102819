// 1) Find the element that we care about
// 2) Add the event listener on that element using addEventListener

// element.addEventListener("event_type", function(evt){
  // Most likely, do some DOM Manipulation
// })

function regularFunction(){
  console.log("regular");
}

let arrowFunction = () => {
  console.log("arrow");
}



let tacoButton = document.querySelector("#taco")
let newEmojiForm = document.querySelector("#emoji-form")
let emojisUl = document.querySelector("#blobs")


// The original six emojis need event listeners because they're hard-coded on the HTML

let theOriginalSixEmojis = document.querySelectorAll("li")

theOriginalSixEmojis.forEach((emojiLi) => {

  emojiLi.addEventListener("click", (evt) => {
    emojiLi.remove()
  })

})






// Start closure

function takeOneEmojiToHTML(emoji){
  let newLi = document.createElement("li")
  newLi.innerText = emoji
  emojisUl.append(newLi)

  // emojisUl.innerHTML += `<li>${emoji}</li>`

  newLi.addEventListener("click", () => {
    console.log(emoji);
    newLi.remove()
  })

}

// End closure



newEmojiForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let newEmoji = evt.target.emoji.value
  // let newEmoji = evt.target["emoji-with-a-dash"]

  takeOneEmojiToHTML(newEmoji)
})


tacoButton.addEventListener("click", function(evt){
  takeOneEmojiToHTML("🌮")
})








// Start Delegation

// 1) Find a lowest level stable parent
// 2) Add an event listener on that parent

// 3) Inside the event listener, gate it behind an if statement
// (evt.target)
// 4) Inside the if statement, write what you want to do
// (evt.target)

// emojisUl.addEventListener("click", function(evt){
//   if(evt.target.tagName === "LI"){
//
//     // evt.target is one of the children
//     evt.target.remove()
//
//   }
// })

// End delegation
