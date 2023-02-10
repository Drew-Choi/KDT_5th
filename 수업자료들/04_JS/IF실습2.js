
let DAY = new Date().getDay();

if (DAY === 0)
  alert("일요일");
else if (DAY === 1) 
  alert("월요일");
else if ((DAY === 2))
  alert("화요일");
else if ((DAY === 3))
  alert("수요일");
else if ((DAY === 4))
  alert("목요일");
else if ((DAY === 5))
  alert("금요일");
else if ((DAY === 6))
  alert("토요일");
else
  alert("오류입니다.");