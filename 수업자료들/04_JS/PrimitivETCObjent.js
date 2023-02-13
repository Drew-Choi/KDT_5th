const tetz = {
  name: "이효석",
  email: "xeo@gmail.com"
}

const Mike = {
  name: "이효석",
  email: "xeo@gmail.com"
}

console.log(tetz === Mike);

console.log(JSON.stringify(tetz) === JSON.stringify(Mike));
//기본적으로 객체 내부는 같을 수 없으나 내용이 같은 지 확인을 하고 싶다면, Json 형식으로 바꿔서 객체 키를 String으로 바꾸고 비교연산을 하면된다.


// const tetz = {
//   name: "이효석",
//   email: "xenosign@naver.com",
//   };
//   const tetzCopy = tetz;
//   tetzCopy.name = "tetz";
//   console.log(tetzCopy);
//   console.log(tetz);
//   console.log(tetz === tetzCopy); // TRUE

