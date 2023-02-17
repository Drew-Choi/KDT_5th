const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const resultObj = Object.assign(obj1, obj2); // 같은 키가 있음 뒤에 있는 것(Obj2)이 앞(Obj1)을 덮는다.

console.log(obj1);
console.log(obj2);
console.log(resultObj);

console.log(obj1 === resultObj) // resultObj는 새로운 메모리를 생성하는 것이 아니라, assign 앞에 나오는 Obj1 메모리에 값을 넣는다.
//그러니까 바꾸고 싶은 애를 assign앞에, 기준이 될 놈을 뒤에 두면 된다.

resultObj.a = 10;

console.log(obj1);