//while 문 기본
let index = 0;

while (index < 10) {
  console.log(`인사를 ${index}번째 드립니다.`);
  index++;
}

let index2 = 0;
while (true) {
  console.log(`안녕 ${index2}번째 함.`);
  index2++;
  if (index2 > 10) {
    break;
  }
}


//do wile

let i = 0;

do {
  console.log(`do-while 인덱스는 ${i}입니다.`);
  i++;
} while (i > 10);

let i2 = 0;
while (i2 > 10) {
  console.log(`while 인덱스는 ${i2}입니다.`);
  i++;
}

//실습
let ii = 2;
let j = 1;

while (ii < 10) {
  while (j < 10) {
    console.log(`${ii} x ${j} = ${ii * j}`);
    j++;
  }
  ii++;
  j = 1;
}