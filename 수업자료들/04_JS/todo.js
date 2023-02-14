const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

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