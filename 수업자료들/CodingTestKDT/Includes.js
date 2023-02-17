let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.includes(3));
console.log(numbers.includes(7));


//실습
let sameArr = [];
let diffArr = [];

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let aaa = fruits1.filter((item) => {
  if (fruits2.includes(item)){
    sameArr.push(item);
  } else {
    diffArr.push(item);
  }
})
console.log(sameArr);
console.log(diffArr);