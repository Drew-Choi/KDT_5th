// let mathScore = prompt("수학 점수를 입력해주세요.");
// let englishScore = prompt("영어 점수를 입력해주세요.");

// let ave = (mathScore + englishScore) / 2;

// console.log(ave);

//--> 프롬프터가 스트링을 받아서 오류가 남 아래 처럼 형변환을 해줘야 함.

// let mathScore = prompt("수학 점수를 입력해주세요.");
// let englishScore = prompt("영어 점수를 입력해주세요.");

// let ave = (Number(mathScore) + Number(englishScore)) / 2;

// console.log(ave);
//--> 형변환은 앞에 꼭 대문자여야 한다.

// let str = "123";
// console.log(str / 2);

// let num = Number(str);
// console.log(typeof num);
// console.log(num / 2);

// console.log(Number("안녕하세요"));

// let num2 = 123;
// let num3 = 456;

// let str1 = String(num2);
// let str2 = String(num3);

// console.log(str1 + str2);

console.log(1, Boolean(1));
console.log(0, Boolean(0));
console.log(-1, Boolean(-1));
console.log("최두루", Boolean("최두루"));
console.log("", Boolean(""));
console.log(" ", Boolean(" "));
console.log(undefined, Boolean(undefined));
console.log(null, Boolean(null));
console.log(NaN, Boolean(NaN));