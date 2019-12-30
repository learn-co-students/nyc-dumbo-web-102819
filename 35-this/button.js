let mainDiv = document.querySelector("#main-div")

// classes in React determine the structure/event listeners of the components

class ButtonJS {

  constructor(colorArgumentStr) {
    // `this` -> is the instance

    // START of structure
    this.color = colorArgumentStr

    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = `Color: ${this.color}`

    mainDiv.append(this.buttonTag)
    // END of structure

    // Event Listeners

    let theInstance = this
    this.buttonTag.addEventListener("click", theInstance.handleClick)

  }

  // handleClick is an instance method, so `this` -> instance
  handleClick = () => {
    document.body.style.backgroundColor = this.color;
  }


}
