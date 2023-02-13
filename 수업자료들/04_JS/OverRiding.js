//Over_Riding
//그냥 상속받는 클래스에 덮어 씌우는 개념

//원본 클래스
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}식 자동차가 주행 중 입니다.`);
  }
}

//클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyndai", "blue");
hyundai.drive();

const tesla = new ElecCar("tesla", "red", "electricity");
tesla.drive();