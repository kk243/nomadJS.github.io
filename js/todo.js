
// ---------------------------------
// VARIABLES
// ---------------------------------
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

// let: 기존에 있던 값을 넣어줘야해서
let toDos = [];


// ---------------------------------
// FUNCTION
// ---------------------------------
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// DeleteToDo
// ---------------------------------
function deleteToDo(event) {

    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos(); // 한번더 해줘야함
} 

// paintToDo: list/btn 만들어줌
// ---------------------------------
function paintToDo(newTodo) {

    // li, span element 만들고 text 넣어줌
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    // btn만들고 delete func 넣어줌
    const button = document.createElement("button");
    button.innerText="x";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.float = "right";
    button.style.right = "5px";
    button.style.marginTop = "9px";
    button.style.cursor = "pointer";

    button.addEventListener("click",deleteToDo);

    button.style.position='relative';

    // append는 제일 마지막에 추가
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// handleToDoSumit: input에서 값을 newtToDo에 넣어주고 paintToDo 실행
// ---------------------------------
function handleToDoSumit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value; //string
    console.log(toDoInput.value);
    
    toDoInput.value="";
    console.log(newTodo, toDoInput.value);
    
    // object를 저장
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    saveToDos();

    paintToDo(newTodoObj); // delete, save를 넣어줄 것!
}

toDoForm.addEventListener("submit", handleToDoSumit);


// ---------------------------------
// to do list 값 저장 > array > 다시 show
// ---------------------------------


//값이 없는 경우 null
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    // func 안만들고 item =>로 할당해주는 방법!
    // lambda 같음 이름: arrow function
    // parsedToDos.forEach((item) => console.log("print ", item))
    parsedToDos.forEach(paintToDo);
} 

// delete 대신에 filter를 거는 법
// true, false 반환해야함
