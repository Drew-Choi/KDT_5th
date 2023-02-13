const user = {
  name: "Mike",
  sayHello() {
    console.log(`Hello, I'm ${user.name}`);
  }
}

user.sayHello();


//This 활용하면 똑같음
const user2 = {
  name: "Mike",
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

user2.sayHello();



//This 제대로 활용하기 외부 함수 실행시
function sayHello () {
  console.log(`Hello, I'm ${this.name}`);
}

let boy = {
  name: "Kane",
  sayHello
}

let girl = {
  name: "jane",
  sayHello
}

boy.sayHello();
girl.sayHello();
sayHello();