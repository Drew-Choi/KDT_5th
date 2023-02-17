//for in 은 갯수가 나오고, for of는 배열 하나씩을 반환한다.

str = "apple";

for (letter of str) {
  console.log(letter);
}

for (letter in str) {
  console.log(letter);
}

//객체는 for in으로 키값을 반환하고 그걸 활용해서 값을 얻을 수 있다.

const obj = {
  nba: "Lebron",
  soccer: "messi",
  baseball: "TMT",
}

for (item in obj) {
  console.log(obj[item]);
}