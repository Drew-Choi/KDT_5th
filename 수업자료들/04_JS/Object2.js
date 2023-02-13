const tetz = { 
  name: "이효석",
  age: 39
};

console.log(tetz);

//접근
console.log(tetz.name);
console.log(tetz["age"]);

//추가
tetz.gender = 'M';
console.log(tetz);

tetz["hair_color"] = 'black';
console.log(tetz);

//삭제
delete tetz.hair_color;
console.log(tetz);

delete tetz["gender"];
console.log(tetz);



//실습
const pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 40,
  running() {
    console.log("뽀로로는 달려갑니다.");
  },
  say() {
    console.log("뽀로로는 귀엽습니다.");
  }
}

for (let key in pororo) {
  console.log(key);
  console.log(`Key는 ${key}, key 안의 값은 ${pororo[key]}입니다.`)
}

pororo.running();
pororo.say();

// console.log(pororo.name);
// console.log(pororo["age"]);

// pororo.gender = "Man";
// console.log(pororo);

// pororo["height"] = "140cm";
// console.log(pororo);

// delete pororo.gender;
// console.log(pororo);


// //존재여부확인
// console.log("name" in pororo);
// console.log("height" in pororo);
// console.log("gender" in pororo);