let toDoOl = document.querySelector("#to-do-items")
// let toDoOl = document.querySelector(".ui.massive.list")
let newToDoForm = document.getElementById('new-to-do')



// START DELEGATION

toDoOl.addEventListener("click", (evt) => {
  if (evt.target.tagName === "INPUT") {
    console.log("Update", evt.target);

    // let theBooleanItWillBecome = evt.target.checked
    // let id = evt.target.parentElement.dataset.id
    //
    // fetch(`http://localhost:3000/to_do_items/${id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     done: theBooleanItWillBecome
    //   }),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })
    // .then(r => r.json())
    // .then((newlyUpdatedObject) => {
    //
    //   if (newlyUpdatedObject.done) {
    //     evt.target.parentElement.classList.add("done")
    //   } else {
    //     evt.target.parentElement.classList.remove("done")
    //   }
    // })
    //

  } else if(evt.target.tagName === "BUTTON"){
    console.log("delete functionality");

    // let id = evt.target.parentElement.dataset.id
    //
    // fetch(`http://localhost:3000/to_do_items/${id}`, {
    //   method: "DELETE"
    // })
    // .then(r => r.json())
    // .then(() => {
    //   evt.target.parentElement.remove()
    // })

  }
})

// END DELEGATION



// START READ
fetch("http://localhost:3000/to_do_items")
  .then(r => r.json())
  .then((toDoItemsArr) => {

    toDoItemsArr.forEach((toDoItemObj) => {
      takeJSONtoHTML(toDoItemObj)
    })

  })

// END READ



// {id: 1, title: "Make fetch happen", done: true} -> <li>Make Fetch Happen</li>
function takeJSONtoHTML(toDoItemObj){
  // 1) Create the outer element
  let toDoLi = document.createElement("li")
    toDoLi.className = "item"
    if (toDoItemObj.done) {
      toDoLi.classList.add("done")
    }

  // 2) Fill the contents of that outer element using innerHTML

  toDoLi.innerHTML = `<input id="to-do-item-${toDoItemObj.id}" type="checkbox" ${ toDoItemObj.done ? "checked" : "" } />
    <label for="to-do-item-${toDoItemObj.id}" class="js-title middle aligned content">${toDoItemObj.title}</label>
    <button>×</button>`

  // 3) Append the outer element to the DOM
  toDoOl.append(toDoLi)

  toDoLi.dataset.id = toDoItemObj.id

  // QuerySelector on the outer element for the thing you want to find
  let deleteButton = toDoLi.querySelector("button")
  let checkbox = toDoLi.querySelector("input")

  // START DELETE
  deleteButton.addEventListener("click", () => {
    handleDelete(toDoItemObj, toDoLi)
  })
  // END DELETE


  // START UPDATE
  checkbox.addEventListener("click", () => {
    handleUpdate(toDoItemObj, toDoLi)
  })
  // END UPDATE

}



function handleDelete(toDoItemObj, toDoLi){
  fetch(`http://localhost:3000/to_do_items/${toDoItemObj.id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then(() => {
    toDoLi.remove()
  })
}




function handleUpdate(toDoItemObj, toDoLi){

  console.log("Original", toDoItemObj);

  toDoItemObj.done = !toDoItemObj.done

  fetch(`http://localhost:3000/to_do_items/${toDoItemObj.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      done: toDoItemObj.done
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(r => r.json())
  .then((newlyUpdatedObject) => {
    console.log("Updated", newlyUpdatedObject)
    if (newlyUpdatedObject.done) {
      toDoLi.classList.add("done")
    } else {
      toDoLi.classList.remove("done")
    }
  })

}


// START CREATE
newToDoForm.addEventListener('submit', (evt) => {
  evt.preventDefault()

  let newTitle = evt.target.title.value

  fetch("http://localhost:3000/to_do_items", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: newTitle,
      done: false
    })
  })
  .then(r => r.json())
  .then((newToDoItem) => {
    takeJSONtoHTML(newToDoItem)
  })

})
// END CREATE
