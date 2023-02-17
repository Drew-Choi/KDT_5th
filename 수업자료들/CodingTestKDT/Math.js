//Math 활용법
//절대값 abs
const num1 = -999;
console.log(Math.abs(num1));

//최대, 최소값 구하기 min, max
console.log(Math.min(1, 2, 3, -5, 10, 100));
console.log(Math.max(1, 2, 3, -5, 10, 100));

const numarr = [-100, 500, 1, 2, 3, 5, 10];
console.log(Math.min(...numarr));
console.log(Math.max(...numarr));

console.log(numarr);
console.log(...numarr); //자바도 같음

//소수점 컨트롤(올림, 내림, 반올림) round, floor, ceil
const num3 = 3.14;
console.log(Math.round(num3));
console.log(Math.floor(num3));
console.log(Math.ceil(num3));

//랜덤 수 만들기 random , 랜덤한 소수를 생성
console.log(Math.random());

//실습
let nums = [-1.23, 13, 14.52, -33.53, 30];
//1
let max = Math.max(...nums);
let min = Math.min(...nums);
console.log("Max 값: " + Math.floor(max));
console.log("Min 값: " + Math.floor(min));

//2
let add = 0;
let result = 0;

for (let i = 0; i < nums.length; i += 1) {
  add += Math.abs(nums[i]);
  result = add / nums.length
}

console.log(result);

//3 0 ~ 100
console.log(Math.floor(Math.random() * 100));
//추가 1 ~ 100 은 ceil