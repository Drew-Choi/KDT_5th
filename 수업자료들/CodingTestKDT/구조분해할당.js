//구조 분해 할당
const tetzObj = {
  name: "이효석",
  age: "39",
  brain: null,
}

// const name = tetzObj.name;
// 아래 같은 결과 나옴. 그런데 아래꺼를 앞으로 사용하라고 권유함
// const { name, age, brain } = tetzObj;

// console.log(name, age, brain);
//이게 구조분해할당, 즉, 키값을 독립적으로 변수로 만드는 것

//구조분해할당에서 변수명 바꾸기
// const { name: tetzName } = tetzObj;
// console.log(tetzName);

//구조분해할당에서 키가 없는 것도 변수로 만들 수 있다.
//ex)
const { name: te, girl= "없음" } = tetzObj;
console.log(te, girl);