let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}
//화살표 함수에서 This 사용은 안된다(객체가 아닌 window를 가져오게 됨)

let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
}

const boy = {
  name: "Mike",
  sayHello
}

const girl = {
  name: "jane",
  sayHallo,
}

boy.sayHello();
girl.sayHallo();

//화살표 함수는 This랑 못쓴다로 간단히 이해하면 됨