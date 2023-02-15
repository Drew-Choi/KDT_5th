// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const textValue = document.querySelector("#content")
const submitValue = document.querySelector("#submit")

// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

//onClick으로 콘텐츠 생성
// writeSchedule()

//date인풋에 날짭입력
  let day = document.querySelectorAll("p");
  day.forEach (function(el) {
      el.addEventListener("click", function(e){
        let pEl = e.target.innerHTML;
        let position = this.parentNode
        targetEl = position
        date.setAttribute("value", `2023년 2월 ${pEl}일`)
      })
    })

  
  submitValue.addEventListener("click", function () {
    let textVal = textValue.value;
    const divEl = document.createElement("div");
    divEl.innerHTML = textVal
    targetEl.append(divEl);

    let deletEl = targetEl.lastChild;

    deletEl.addEventListener("click", function(e) {
      e.target.remove();
    })
    date.setAttribute("value", "");
    textValue.value = null;
  })