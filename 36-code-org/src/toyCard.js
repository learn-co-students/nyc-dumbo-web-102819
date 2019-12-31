class ToyCard{

  constructor(toyObj) {
    this.id = toyObj.id
    this.name = toyObj.name
    this.likes = toyObj.likes
    this.image = toyObj.image

    this.div = document.createElement("div")
      this.div.classList.add("card")
    this.div.innerHTML = `
      <h2>${this.name}</h2>
      <img src="${this.image}" class="toy-avatar" />
      <p>${this.likes} Likes </p>
      <button class="like-btn">Like <3 </button>
      <button class="del-btn"> Donate the Toy </button>
    `

    thePlaceIWillPutAllMyToys.append(this.div)

    this.div.querySelector(".del-btn").addEventListener("click", this.handleDelete)
    this.div.querySelector(".like-btn").addEventListener("click", this.handleLike)


  }
  // END CONSTRUCTOR

  handleDelete = () => {
    Adaptor.donateOneToy(this.id)
    .then(deletedToy => {
      this.div.remove()

      let foundBox = JSBox.all.find(box => box.id === deletedToy.box_id)
      let modifiedArray = foundBox.toys.filter(toy => toy.id !== deletedToy.id)

      foundBox.toys = modifiedArray
    })
  }


  handleLike = () => {
    console.log('Liked', this.id);
  }



}
