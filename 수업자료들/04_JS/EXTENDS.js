//상속에서는 extends와 super를 잊지 말어라

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

  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const tesla = new ElecCar("tesla", "red", "electricity");

tesla.drive();
tesla.showFuel();