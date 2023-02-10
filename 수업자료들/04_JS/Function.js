//void함수
// function helloFunc () {
//   console.log('Hello');
// }


//return함수
// function returnFunc () {
//   console.log("안녕하세요.\n\n\n2");
//   return 'Return';
// }

// let str = returnFunc();
// console.log(str);

// let noNameFunc = 

// function () {
//   console.log("no_name");
//   return "strname";
// }

// let s = noNameFunc();

// console.log("result")
// console.log(s);

//매개변수

// function sayHello(name) {
//   console.log(`Hello~ ${name}~!`);
// }

// sayHello('Mike');
// sayHello('최두루');
// 함수 안 name은 매개변수 <- 애는 그냥 중개 역할 name은 아무 의미 없다
// Mike, 최두루는 인자 <- 애가 진짜임



function sum (num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));


function square(num) {
  return num ** 2;
}
console.log(square(9));


//매개변수 기본값
function sayHello(name = 'friend') {
  console.log(`Hello~ ${name}~!`);
}

sayHello();
sayHello('Mike');




//실습

//삼각형 넓이
// function tri (Bott, Hei) {
//   return ((Bott * Hei) / 2);
// }
// console.log(`삼각형의 넓이는 ${tri(2, 5)}제곱m 입니다.`);

let tri = (Bott, Hei) => {
  return ((Bott * Hei) / 2);
}

console.log(`삼각형의 넓이는 ${tri(2, 5)}제곱m 입니다.`);


//원 넓이
// function cir (half = 3) {
//   return ((half ** 2) * 3.14)
// }

// console.log(`원의 넓이는 ${cir()}제곱m 입니다.`);

let cir = (half = 3) => {
  return ((half ** 2) * 3.14)
}
console.log(`원의 넓이는 ${cir()}제곱m 입니다.`);

//피타고라스
// function pi (a, b) {
//   return Math.sqrt((a ** 2) + (b ** 2));
// }
// console.log(`원의 넓이는 ${pi(3, 4)}m 입니다.`);


let pi = (a, b) => {
  return Math.sqrt((a ** 2) + (b ** 2));
}
