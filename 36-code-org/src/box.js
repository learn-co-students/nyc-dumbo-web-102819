let toyBoxCollection = document.getElementById('toyboxes')
let thePlaceIWillPutAllMyToys = document.getElementById('toy-collection')

class JSBox {

  static all = []
  // state in React

  constructor(boxObj) {
    // `this` -> instance of JSBox

    // ATTRIBUTES (props in React)
    this.id = boxObj.id
    this.name = boxObj.name
    this.toys = boxObj.toys

    // STRUCTURE (render in React)
    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = this.name.toUpperCase()
      this.buttonTag.classList.add("toybox")
    toyBoxCollection.append(this.buttonTag)

    // Event Listeners
    this.buttonTag.addEventListener("click", this.handleClick)
    // <button onClick={this.handleClick} className="toybox">Jack's Toybox</button>


    JSBox.all.push(this)
  }
  // END CONSTRUCTOR

  handleClick = () => {
    thePlaceIWillPutAllMyToys.innerHTML = ""
    this.toys.forEach(toy => {
      new ToyCard(toy)
    })
  }

}
