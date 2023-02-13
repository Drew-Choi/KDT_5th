//생성자 함수
// function Kdt (name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// let user1 = new Kdt("이효석", "M");
// let user2 = new Kdt("김성현", "M");
// let user3 = new Kdt("윤재", "M");
// let user4 = new Kdt("송민선", "F");

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

//생성자 함수 매서드 추가
// function Kdt (name, gender) {
//     this.name = name;
//     this.gender = gender;
//     this.showName = function () {
//       console.log(`성함은 ${this.name}입니다.`);
//     }
//   }
  
//   let user1 = new Kdt("이효석", "M");
//   let user2 = new Kdt("김성현", "M");
//   let user3 = new Kdt("윤재", "M");
//   let user4 = new Kdt("송민선", "F");
  
//   console.log(user1);
//   console.log(user2);
//   console.log(user3);
//   console.log(user4);

//   user1.showName();
//   user2.showName();
//   user3.showName();
//   user4.showName();


//실습
function Kdt (name, gender) {
  this.name = name;
  this.gender = gender;
  this.showNG = function () {
    console.log(`성함은 ${this.name}이며, 성별은 ${this.gender}입니다.`);
  }
}

let user1 = new Kdt("최두루", "남자");
let user2 = new Kdt("최인영", "여자");
let user3 = new Kdt("신상아", "여자");
let user4 = new Kdt("이유림", "여자");
let user5 = new Kdt("구슬기", "여자");

user1.showNG();
user2.showNG();
user3.showNG();
user4.showNG();
user5.showNG();