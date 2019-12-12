let toDoOl = document.querySelector("#to-do-items")
// let toDoOl = document.querySelector(".ui.massive.list")
let newToDoForm = document.getElementById('new-to-do')



fetch("http://localhost:3000/to_do_items")
  .then(r => r.json())
  .then((toDoItemsArr) => {

    toDoItemsArr.forEach((toDoItemObj) => {
      takeJSONtoHTML(toDoItemObj)
    })

  })



// {id: 1, title: "Make fetch happen", done: true} -> <li>Make Fetch Happen</li>
function takeJSONtoHTML(toDoItemObj){
  // 1) Create the outer element
  let toDoLi = document.createElement("li")
    toDoLi.className = "item"

  // 2) Fill the contents of that outer element using innerHTML

  toDoLi.innerHTML = `<input id="to-do-item-${toDoItemObj.id}" type="checkbox" ${ toDoItemObj.done ? "checked" : "" } />
    <label for="to-do-item-${toDoItemObj.id}" class="js-title middle aligned content">${toDoItemObj.title}</label>
    <button>×</button>`

  // 3) Append the outer element to the DOM
  toDoOl.append(toDoLi)

}



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
