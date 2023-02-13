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
  age: 7
}

console.log(pororo.name);
console.log(pororo["age"]);

pororo.gender = "Man";
console.log(pororo);

pororo["height"] = "140cm";
console.log(pororo);

delete pororo.gender;
console.log(pororo);


