document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const usernameInput = document.getElementById('name-input')
  let joke;


  function fetchJoke(){

    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())

  }


  fetchJoke().then(console.log)



  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if(usernameInput.value === "") return;
    fetchJoke()
      .then(jokeData => {
        joke = jokeData.joke

        const newJokeLi = document.createElement('li')
        newJokeLi.innerHTML = `
        <span class="usernameInput">${usernameInput.value} says:</span> ${joke}
        `
        jokeList.appendChild(newJokeLi)

      })
  })








})
