let nameArr = ["구슬기", "김계환", "김민정", "김범석"]

console.log("1번째 이름은", nameArr[0],"입니다.");
console.log("2번째 이름은 " + nameArr[1] + "입니다.");
console.log(`3번째 이름은 ${nameArr[2]}입니다.`);



let Arr = [1, "최두루", true, null]
let Obj = {
  name: "최두루"
}

console.log(`"${typeof Arr[0]}" isn't "${typeof Arr[1]}" data type.`);
console.log(`typeof를 "${typeof Arr[2]}"이나 "${typeof Arr[3]}" 에 사용하면, "${typeof Obj}" 결과를 얻을 수 있습니다.`)