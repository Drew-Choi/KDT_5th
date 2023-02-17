//주의) 문자열도 배열과 같다. 그래서 length를 적용하면 배열 갯수가 잡히듯 잡히는 것

const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

//Map => function의 매개변수 (item(배열 값), index(배열의 순번), origin(원본배열))
const fruitsObjArr = fruits.map(function(item, index, origin){
  //요소들을 객체로 바꾸기
  return {
    id: index,
    name: item,
  }
})

console.log(fruits);
console.log(fruitsObjArr);



  // console.log(item); //0번 값인 사과, 1번 값인 파인애플 ... 등등
  // console.log(index); // 0번, 1번, 2번 등등
  // console.log(origin); // [ '사과', '파인애플', '수박', '포도', '오렌지' ]원본 그대로 출력

  //배열 바꿔주기 return 중요
  const nums = [3, 6, 9, 12, 15, 18, 21];

  const dividArr = nums.map(function(item, index){
    return item / 3;
  })

  console.log(nums);
  console.log(dividArr);


const nums2 = [1, 2, 3, 4, 5, 6];

const diviFour = nums2.map(function(item){
  return item * 4;
})
console.log(nums2);
console.log(diviFour);

//map 화살표 함수식으로 대체 가능
const nums3 = [1, 2, 3, 4, 5, 6];

const diviFour2 = nums3.map((item) => {
  return item * 4;
})
console.log(nums3);
console.log(diviFour2);

//더 줄이기
const nums4 = [1, 2, 3, 4, 5, 6];

const diviFour3 = nums4.map((item) => item * 4);
console.log(nums4);
console.log(diviFour3);




//실습 화살표 함수로 바꾸기
const fruits2 = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr1 = fruits2.map((item, index) => {
  return {
    id: index,
    name: item,
  }
})

console.log(fruits2);
console.log(fruitsObjArr1);
//여기서 return 만 있지만, 객체 선언할 {}가 있어서 자바스크립트가 이게 함수인지 객체인지 구분을 못한다.
//그래서 객체로 변환시에는 화살표만 가능하다.

//실습
let arr = [];
for (let i = 1; i <= 100; i += 1) {
  arr.push(i);
}


let result = 0;
let sum = arr.map((item) => result += item);

console.log(result);
console.log(sum);