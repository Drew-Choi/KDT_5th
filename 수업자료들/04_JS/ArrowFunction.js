//화살표 선언 함수 : 이것도 함수 표현식이라서 호이스팅이 안됌(주의)

// //함수 선언문
// function sayHello() {
//   console.log('Hello');
// }


// //함수 표현식
// let sayHello = function () {
//   console.log('Hello');
// }

//화살표함수
let sayHello = () => {
  console.log('Hello');
}


// function sum(num1, num2) {
//   return num1 + num2;
// };

// let sum = function (num1, num2) {
//   return num1 + num2;
// };

let sum = (num1, num2) => {
  return num1 +num2;
};