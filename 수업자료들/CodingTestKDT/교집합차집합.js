// let sameArr = [];
// let diffArr = [];

// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// let aaa = fruits1.filter((item) => {
//   if (fruits2.includes(item)){
//     sameArr.push(item);
//   } else {
//     diffArr.push(item);
//   }
// })
// console.log(sameArr);
// console.log(diffArr);

// let fruits3 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits4 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// const sameArr2 = fruits3.filter((item) => fruits4.includes(item));
// const diffArr2 = fruits3.filter((item) => !fruits4.includes(item));
// console.log(sameArr2)
// console.log(diffArr2)


let fruits5 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits6 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let sameArr3 = [];
let diffArr3 = [];
fruits5.map ((item) => {
  fruits6.includes(item) ? sameArr3.push(item) : diffArr3.push(item);
});
console.log(sameArr3);
console.log(diffArr3);
