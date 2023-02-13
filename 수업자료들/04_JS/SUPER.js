//super
//인자를 상속 받을 때는 super(상위의 매개변수명, 상위의 매개변수명)
//매서드를 상속 받아서 오버라이딩 할 때는 변수() {super.매서드(); 매서드 입력}이렇게 사용

//원본 클래스
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}식 자동차가 주행 중 입니다.`);
  }
}

//클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyndai", "blue");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electricity");
tesla.showSpec();