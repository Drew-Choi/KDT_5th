// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelector("#content")


// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

//onClick으로 콘텐츠 생성
// writeSchedule()

function calendarTask (e){
  e.target;
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}일`
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}



function writeSchedule () {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력해주세요.");
    date.setAttribute("placeholder", "날짜를 입력해주세요.");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력해주세요.");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 입력해주세요.");
    return;
  }

  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;

  // addDiv.addEventListener ("click", function() {
  // addDiv.remove();
// })

  targetEl.append(addDiv);
  input.value = "";
}

calendar.addEventListener("click", calendarTask);