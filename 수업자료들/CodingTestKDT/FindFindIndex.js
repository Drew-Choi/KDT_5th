//find는 조건에 맞는 값을 찾아 값을 반환, findIndex는 자리 값을 반환(숫자)

const fruits = ["Apple", "Banana", "Cherry"];
const findResult = fruits.find((item) => item === 'Apple');
console.log(findResult);

const findIndex = fruits.findIndex((item) => item === "Banana");
console.log(findIndex);

// const findResult2 = fruits.find((item) => {
//   /^A/.test(item)
// });

// console.log(findResult2);