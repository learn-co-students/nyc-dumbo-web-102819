let potato = 5

const state = {
  num: 67
}

function addToPotato(num){
  return num + potato
}

function addToEachOther(num, otherNum){
  const addedUpNumbers = num + otherNum
  return addedUpNumbers
}

function addToStateNum(currentState){
  return ++currentState.num
}

function sevenizePotato(){
  potato = 7
}

function spiderLegCount(){
  return 7
}

function projectedDemise() {
  const currentTime = new Date()
  const randomIntegerUnder100 = Math.floor(Math.random() * 100)
  return currentTime.getFullYear() + randomIntegerUnder100;
}
