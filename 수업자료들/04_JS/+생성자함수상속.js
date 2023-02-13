//클래스가 아닌 생성자 함수의 상속을 한번 다루어 보자

// function Car (brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
//   }
// }

// //위 생성자함수로 상속해보기

// function ElecCar(brand, color, fuel) {
//   Car.call(this, brand, color);
//   this.fuel = fuel;

//   this.drive =  function() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행 중입니다.`);
//   }
// }

// ElecCar.prototype = Object.create(Car.prototype);
// ElecCar.prototype.constructor = ElecCar;

// const tesla = new ElecCar("tesla", "white", "electricity");
// tesla.drive();


// 실습
class Shape {
  constructor(width, height) {
  this.width = width;
  this.height = height;
  } 
  getArea() {
    return (this.width)*(this.height)
  }
}

//상속
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea (){
    return ((this.width) * (this.height)) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    //슈퍼 무조건 콜 해야함
    this.radius = radius;
  }
  getArea (){
    return (this.radius ** 2) * 3.14
  }
}

const shape1 = new Rectangle(10, 10);
const shape2 = new Triangle(10, 10);
const shape3 = new Circle(3);

console.log(shape1.getArea());
console.log(shape2.getArea());
console.log(shape3.getArea());
