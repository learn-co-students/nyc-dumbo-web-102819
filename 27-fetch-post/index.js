// element.addEventListener("event_type", () => {

// potentially get some variables from the event.target

// fetch("url", {})
  // .then(r => r.json())
  // .then((response) => {
    // WORK WITH THAT RESPONSE TO MANIPULATE THE DOM
  // })

// })

let button = document.querySelector("#hello-button")
let foxesUL = document.querySelector("#foxes")
let newFoxForm = document.getElementById('fox-form')



newFoxForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let newFoxName = evt.target.f_name.value
  let newFoxImage = evt.target.fox_img.value

  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: newFoxName,
      img_url: newFoxImage
    })
  })
  .then(r => r.json())
  .then((newFoxJSON) => {
    turnFoxToHTML(newFoxJSON);
  })
})



button.addEventListener('click', (evt) => {
  fetch("http://localhost:3000/foxes/random")
    .then(res => res.json())
    .then((fox) => {
      turnFoxToHTML(fox)
    })
})



// {} -> <html></html>
function turnFoxToHTML(fox){
  let newFoxLi = document.createElement("li")
  let newFoxImg = document.createElement("img")

  newFoxImg.src = fox.img_url
  newFoxImg.alt = fox.name

  // newFoxImg.dataset.id = fox.id

  newFoxLi.append(newFoxImg)
  foxesUL.append(newFoxLi)

  newFoxImg.addEventListener("click", () => {
    consoleLogFoxId(fox)
    console.log(fox.created_at);
  })
}



// foxesUL.addEventListener("click", (evt) => {
//   if (evt.target.tagName === "IMG") {
//     console.log("I am now deleting", evt.target.dataset.id);
//   }
// })



function consoleLogFoxId(fox){
  console.log(fox.id);
}
