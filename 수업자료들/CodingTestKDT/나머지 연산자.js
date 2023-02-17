const fruits = ["사과", "바나나", "수박", "망고", "딸기"];
// console.log(fruits);
// console.log(...fruits);

function conLog(a, b, ...c) {
  console.log(a, b, c);
}
// 나머지연산자. 매개변수에 넣고 남는 것은 마지막 C에 배열로 들어감. -> 위 결과값: 사과 바나나 [ '수박', '망고', '딸기' ]
// conLog(fruits[0], fruits[1], fruits[2])
conLog(...fruits);


const str = "apple";
// str.map() // 오류남. 스트링은 map을 못 씀. 그래서 전개연산자를 서야함
const strArr = [...str];
console.log(strArr);

const strArr2 = str.split("");
console.log(strArr2);