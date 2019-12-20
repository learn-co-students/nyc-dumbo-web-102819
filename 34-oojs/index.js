let jack = {
  fullName: "Jack Hilscher",
  djName: "J-Roxx",
  introduce: function(){
    return "Yo, I'm J-Roxx."
  }
}

let randy = {
  fullName: "Randy Herasme",
  djName: "R-Kool",
  introduce: function(){
    return "Yo, I'm R-Kool."
  }
}

let eric = {
  legalName: "Hyeok Jung Kim",
  djName: "E-Smooth",
  introduce: function(){
    return "Yo, I'm E-Smooth."
  }
}

console.log(jack.introduce())
console.log(eric.introduce())
console.log(randy.introduce())

// console.log(eric.introduce);
// console.log(jack.introduce);

// console.log(eric.introduce() === jack.introduce())

// console.log(eric.introduce === jack.introduce)
