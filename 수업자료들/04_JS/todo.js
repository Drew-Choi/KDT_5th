const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");


// 내가한거
addBtn.addEventListener ("click", function(){
  const liEl = document.createElement("li");
  const spanEl = document.createElement("span");
  const checkboxEl = document.createElement("input");
  checkboxEl.setAttribute("type", "checkbox");
  const deletetBtn = document.createElement("button");
  deletetBtn.setAttribute("type", "submit");
  deletetBtn.textContent = "삭제";
  const brEl = document.createElement("br");
  const inputTaskValue = inputTask.value;
  spanEl.innerText = `    ${inputTaskValue}   `;

  if (inputTaskValue === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요!")
  } else {
    todoList.append(liEl, brEl);
    liEl.append(checkboxEl, spanEl, deletetBtn);
  }


  checkboxEl.addEventListener ("click", function(){
    if (checkboxEl.checked === true) {
      checkboxEl.parentNode.style.textDecoration = "line-through";
    } 
    else {
      checkboxEl.parentNode.style.textDecoration = "none"; 
    }
  });
  
  deletetBtn.addEventListener ("click", function(){
    liEl.nextSibling.remove();
    deletetBtn.parentNode.remove();
  })

})



// // 강사님 코딩
// //addEvent가 길어지면 따로 함수 빼도 됨
// function addList () {
//   if (inputTask.value === " ") {
//     inputTask.setAttribute("placeholder", "내용을 입려하세요.");
//     return;
//     //리턴이 걸리면 종료가 됨
//   };
//   //Li생성
//   const addLi = document.createElement("li");

//   //checkbox생성 및 생성자에 바로 이벤트를 걸어줌 그래서 하나의 세트라고 생각해라
//   //상위 함수나 이벤트가 발생해도 이 버튼은 자신의 이벤트를 품고 있다.
//   const checkBtn = document.createElement("input");
//   checkBtn.setAttribute("type", "checkbox");
//   checkBtn.addEventListener ("click", function(){
//     if (checkBtn.checked === true) {
//       checkBtn.parentNode.style.textDecoration = "line-through"
//     } else {
//       checkBtn.parentNode.setAttribute("style", "text-decoration: non")
//     }
//   }) //체크박스 이벤트 완료

//   const deletetBTN = document.createElement("button");
//   deletetBTN.textContent = "삭제";
//   deletetBTN.addEventListener ("click", function(e){
//     e.target.parentNode.remove();
//   });

//   //위에서 아래 순서로 append 됨 (체크박스 뒤에 나란히 밸류 붙음)
//   addLi.append(checkBtn);
//   addLi.append(inputTask.value);
//   addLi.append(deletetBTN);
//   todoList.appendChild(addLi);

//   inputTask.value = " ";

// }

// addBtn.addEventListener("click", addList)