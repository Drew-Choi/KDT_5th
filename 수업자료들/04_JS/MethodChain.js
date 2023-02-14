//문자열 스플릿하고 다시 컴바인하기
let helloTest = "H-e-l-l-o";

//스플릿
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

//뒤집기(revers)
let reversHello = helloTestArr.reverse();
console.log(reversHello);

//콤바인(join)
let helloStr = helloTestArr.join("*");
console.log(helloStr);


let result = reversHello.join("");
console.log(result);


//메소드 체이닝 진행

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);



const obj = {
  arr: ["a", "b", "c"],
  number: 10
}

let testStr = obj.str?.reverse().join("");
console.log(testStr);



//실습

const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");
console.log(result1);
console.log(result2);