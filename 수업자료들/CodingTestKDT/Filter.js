const numbers = [1, 2, 3, 4, 5, 6];

const filterArr = numbers.map(function(item, index, origin){
  return item > 3
})

console.log(filterArr);

const numbers2 = [1, 2, 3, 4, 5, 6];


//축약
const filterArr2 = numbers2.filter((item) => item > 3);

console.log(filterArr2);



const words = ["spray", "limit", "elite", "present", "aaaaaa"];

const resultArr = words.filter((item) => item.length > 6);
console.log(resultArr);
console.log(words);