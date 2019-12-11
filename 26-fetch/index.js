// element.addEventListener("event_type", () => {

// potentially get some variables from the event.target

// fetch("url", {})
  // .then(r => r.json())
  // .then((response) => {
    // WORK WITH THAT RESPONSE TO MANIPULATE THE DOM
  // })

// })

document.addEventListener("DOMContentLoaded", () => {
  // Inside the DOMContentLoaded, the DOM has been loaded

  // let aPromise = fetch("https://dog.ceo/api/breeds/image/random")
  // let anotherPromise = aPromise.then((responseObject) => { return responseObject.json() })
  // anotherPromise.then((thing) => { console.log(thing) })

  let dogButton = document.querySelector("#hello-button")
  let dogUL = document.getElementById('dogs')


  dogButton.addEventListener("click", () => {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then((theActualResponse) => {

      let dogLi = document.createElement("li")
      let dogImage = document.createElement("img")

      dogImage.src = theActualResponse.message
      dogImage.alt = "good dog"

      dogLi.append(dogImage)
      dogUL.append(dogLi)
    })



  })


})

// The DOM is not guaranteed to be loaded (unless we use defer)
