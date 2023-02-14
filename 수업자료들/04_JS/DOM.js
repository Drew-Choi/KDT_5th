// //DOM (Document Object Model)

// //querySelector("CSS선택자처럼")
// let boxEl = document.querySelector(".box");

// console.log(boxEl);

// let liEl = document.querySelector("ul > li:nth-child(2)");

// console.log(liEl);



// //getElementById("아이디이름만")
// let thirdBoxEl = document.getElementById("third");
// console.log(thirdBoxEl);



// //classList .add / remove / contain
// const b = document.querySelector(".box");
// b.classList.add("orange");

// console.log(b);

// const d = document.getElementById("third");
// d.classList.remove("box");

// console.log(boxEl.classList.contains("box"));
// console.log(thirdBoxEl.classList.contains("box"));



//실습
let o = document.querySelector(".orange");
console.log(o);

let sky = document.getElementById("skyblue");
console.log(sky);

let chi = document.querySelector("ul li:nth-child(2)");
chi.classList.add("orange")
console.log(chi);

let trueor = o.classList.contains("orange")

if (trueor) {
  o.classList.remove("orange")
}

console.log(o);