const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
let addToy = false
let toyCollectionDiv = document.getElementById('toy-collection')
let toyForm = document.querySelector(".add-toy-form")

// YOUR CODE HERE
fetch("http://localhost:3000/toys")
.then(res => res.json())
.then((allToys) => {
  allToys.forEach((toy) => {
    console.log(toy);
    toyCollectionDiv.innerHTML += toyCard(toy)
  })
})


toyCollectionDiv.addEventListener("click", (event) => {
  if (event.target.className === "like-btn") {
    // if(event.target.tagName === "BUTTON")
    let id = parseInt(event.target.dataset.id)
    let pTag = event.target.parentElement.querySelector("p")
    let likes = parseInt(pTag.innerText.split(" ")[0])
    likes++
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH', // or 'PUT'
      body: JSON.stringify({
        likes: likes
      }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        "Accept": "application/json"
      }
    })
    .then(r => r.json())
    .then((newToy) => {
      console.log(newToy);
      pTag.innerText = `${newToy.likes} Likes`
    })
  }
  else if(event.target.className === "delete-btn"){
    let id = parseInt(event.target.dataset.id)
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((response) => {
      console.log(response);
      event.target.parentElement.remove()
    })
  }
})

const toyCard = (toy) => {
  return `<div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes</p>
    <button data-id="${toy.id}" class="like-btn">Like <3</button>
    <button data-id="${toy.id}" class="delete-btn">Delete</button>
  </div>`
}

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


toyForm.addEventListener("submit", (event) => {
  event.preventDefault()
  let form = event.target
  let name = form.name.value
  let image = form.image.value

  fetch(`http://localhost:3000/toys`, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 0
    }),
    headers:{
      'Content-Type': 'application/json',
      "Accept": "application/json"
    }
  })
  .then(res => res.json())
  .then(response => {
    if (response.id) {
      toyCollectionDiv.innerHTML += toyCard(response)
    } else {
      alert(response.errors[0])
    }

  })














})
