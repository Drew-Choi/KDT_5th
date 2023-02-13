
//클래스오 생성자함수 차이
//1. 생성자는 호스팅이 작용하지만, 클래스는 Strict라서 순서대로 해줘야 함(선언 후 인스턴스해야함)
//2. 클래스가 상속이 더 편하다


//스텝1 생성자 함수를 먼저 만들어보자
const hyundai = new ConstructorCar("hyundai", "blue");

console.log(hyundai);
hyundai.drive();

function ConstructorCar (brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중 입니다.`);
  }
}



//----- 생성자함수를 클래스로 바꾸기
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중 입니다.`);
  }
}

const tesla = new ClassCar("tesla", "white");
console.log(tesla);
tesla.drive();