const str = "Hello, World!";

//문자열은 배열로 인식
for (let i = 0; i < str.length; i += 1) {
  console.log(str[i]);
}
//특정 문자열 찾기 indexOf
console.log(str.indexOf("World"));
//문자열 자르기 silce (자바에선 substring으로)
console.log(str.slice(0, 6));

//예시 문제
console.log(str.slice(0, str.indexOf("World")));


//문자열 바꾸기 replace
console.log(str.replace("World", "Pororo"));
console.log(str);
//문자열 반복 repeat
const str2 = "우영";
let longString = str2.repeat(2);
console.log(longString);
//문자열 앞 뒤에 공백 날리기 trim();
let str3 = "      Hello, World     ";
console.log(str3.trim());


//수박 문제 풀기
function solution (n) {
  let answer = "";

  for (let i = 0; i < n; i += 1) {
    if(i % 2 === 1) {
      answer += "박";
    } else {
      answer += "수"
    }
  }
  return answer
}

console.log(solution(3));