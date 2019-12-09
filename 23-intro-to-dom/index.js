// READ

let emojisUL = document.querySelector("ul")
let anotherWayToGrabTheUL = document.getElementById('blobs')
let anotherWayToGrabTheSameUL = document.querySelector("#blobs")

console.log(emojisUL);





// CREATE

// 1) Get a blank sheet of paper
let newLi = document.createElement("li")

// 2) Razzmatazz
newLi.id = "taco"
newLi.className = "eric"
newLi.classList.add("jack")

newLi.innerText = "🌮"

// 3) Slap on the DOM
emojisUL.append(newLi)


// BAD, but valid
// emojisUL.innerHTML += "<li> 🍕 </li>"





// UPDATE

// 1) Find the element
let myH1 = document.querySelector("h1")

// 2) Razzmatazz
myH1.innerText = "Here is a nice list, grandma!"
myH1.id = "heading"





// DESTROY
// 1) Find the element
let badEmoji1 = document.querySelector(".bad")

// 2) Remove the element
badEmoji1.remove()





let allBadEmojis = document.querySelectorAll(".bad")
// querySelectorAll returns a NodeList, which we can `.forEach`
let allBadEmojis2 = document.getElementsByClassName('bad')
// getElementsByClassName returns an HTMLCollection, which is live

console.log(allBadEmojis);
console.log(allBadEmojis2);

allBadEmojis.forEach(function(emojiLi){
  emojiLi.remove()
})

console.log(allBadEmojis2);
