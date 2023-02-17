// Arr.reduce
// 아래 첫번째가 정식 문법
// const num2 = [1, 2, 3, 4, 5];
// const sumResult = num2.reduce(function(acc, item, index, origin){
//   return acc += item;
// }, 0);
//acc는 누산기. 즉, 값을 계산하기 위한 가상 변수. reduce는 배열이 아닌 누산기를 통해 계산된 값을 반환함.

// console.log(sumResult);

// const num2 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];

// const reduceR = num2.reduce((acc, item) => {
//   if (item < 0) {
//     acc[0] += 1;
//   } else {
//     acc[1] += 1;
//   }
//   return acc;
// },[0, 0]);

// console.log(reduceR);

//실습

let num = [];
for (let i = 1; i <= 100; i += 1){
  num.push(i);
}

console.log(num);

const sumR = num.reduce((acc, item) => {
  return acc += item;
});
console.log(sumR);