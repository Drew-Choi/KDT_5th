// const fruits = ["apple", "grape", "pineapple", "strawberry"];

// console.log(fruits[0], fruits[3]);

// console.log(fruits[4]);

// const dataType = ["String", 1, true, undefined, null];

// console.log(dataType[1]);


// 배열디테일

//실습
let kdt = ["최인영", "신상아", "이유림", "구슬기"];

kdt.push("최두루");
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift("최두루");
console.log(kdt);

kdt.shift();
console.log(kdt);






// console.log(kdt.push("백진솔")); //백진솔을 리턴하지 않음에 주의, length를 리턴함

// kdt[0] = "백진솔" //배열 변경 최두루->백진솔로 그런데 이게 메모리에 저장되는 건 아니다.

// console.log(kdt);
// console.log(kdt.length);

// kdt.pop();
// console.log(kdt);

// console.log(kdt.pop()); //팝은 이름을 리턴함
// console.log(kdt);

// console.log(kdt.unshift("이효석"));
// console.log(kdt);

// kdt.shift();
// console.log(kdt.shift());
// console.log(kdt);


// for (let i = 0; i < kdt.length; i += 1) {
//   console.log(kdt[i]);
// }