//논리 연산자
//  || (or), && (and), ! (not)
//+
// If문


if (false) {
  console.log("TRUE 입니다.");
} 
else if (true) {
  console.log("elseif 문 내부 입니다.");
}

else {
  console.log("FALSE 입니다.");
}

// 조건 비교
let Tetz = 10;

if (Tetz > 40) {
  console.log("그는 늙었습니다.");
} else if (Tetz <= 40 && Tetz >= 20) {
  console.log("그는 MZ입니다.");
} else {
  console.log("그는 애기입니다.");
}

//if문 중첩
let isOld = true;
let isRich = false;

if (isOld) {
  if (isRich) {
    console.log("망했어요");
  } else {
    console.log("낫 베드");
  }
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}

//NOT연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if(!isAdult) {
  console.log('돌아가');
} else {
  console.log('통과');
}

//다중 비교
// 여성이고, 이름이 Jane 이거나 성인이면 통과

let gender = 'M';
let name = 'Tom'
let isAdultTom = true;

if (gender === 'F' && (name === 'Jane' || isAdultTom === true)) {
  console.log("통과");
} else {
  console.log("돌아가");
}