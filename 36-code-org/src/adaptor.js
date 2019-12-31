// Functions whose jobs are to make requests to the API
// Those functions should probably return a promise

const API = "http://localhost:3000"

function getAllBoxes(){
  return fetch(API + "/boxes")
  .then(r => r.json())
}

function donateOneToy(id){
  return fetch(API + `/toys/${id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
}

const Adaptor = {
  getAllBoxes: getAllBoxes,
  donateOneToy: donateOneToy
}
