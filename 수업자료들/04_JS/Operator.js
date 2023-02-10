let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);
console.log(2 ** 4);
console.log(Math.sqrt(16));

// 연산자 줄여 쓰기
let num2 = 5;
num2 = num2 * 5;

let num3 = 5;
num3 *= 5;

console.log(num2, num3);

//증가 감소 연산자
let num4 = 10;

console.log("증가 감소 연산자", num4 += 1);
console.log(num4);
//++ --  앞 뒤 배치에 주의하라


//비교 연산자
let a = 5;
let b = '5';

console.log('비교 연산자', a == b);
console.log('비교 연산자', a === b);
