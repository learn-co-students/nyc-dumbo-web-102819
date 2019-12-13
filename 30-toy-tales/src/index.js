let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{

  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  const toyCollectionDiv = document.getElementById('toy-collection')
  const newForm = document.querySelector(".add-toy-form")

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })


  newForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let toyName = evt.target.name.value
    let toyImage = evt.target.image.value

    let theToyObj = {
      name: toyName,
      image: toyImage,
      likes: 0
    }

    evt.target.reset()

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(theToyObj)
    })
    .then(r => r.json())
    .then(turnJSONtoHTML)


  })













  fetch("http://localhost:3000/toys")
    .then(r => r.json())
    .then(toysArr => {
      toysArr.forEach(turnJSONtoHTML)
    })





  // {} -> <html></html>
  function turnJSONtoHTML(toyObj){

    let toyDiv = document.createElement("div")
      toyDiv.className = "card"

    toyDiv.innerHTML = `<h2>${toyObj.name}</h2>
      <img src="${toyObj.image}" class="toy-avatar" />
      <p>${toyObj.likes} Likes </p>
      <button class="like-btn">Like <3</button>`

    toyCollectionDiv.append(toyDiv)


    let likeBtn = toyDiv.querySelector(".like-btn")
    let pTag = toyDiv.querySelector("p")


    likeBtn.addEventListener("click", () => {

      toyObj.likes = toyObj.likes + 1

      fetch(`http://localhost:3000/toys/${toyObj.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          likes: toyObj.likes
        })
      })
      .then(r => r.json())
      .then((updatedToyObj) => {
        pTag.innerText = `${updatedToyObj.likes} Likes`
      })

    })

  }



















})
