//break

// for (let i = 0; i < 20; i++) {
//   if(i % 2 === 1) continue;
//   console.log(`${i}번 입니다.`);
  
//   if(i === 4) break;
// }


//실습

let SUM = 0;
for (let i = 1; i <= 1000; i += 1) {
  if (i % 2 === 1) {continue
  } 
  else {
  SUM += i;
  }
}

console.log(SUM);
