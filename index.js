//For add Todo
const form = document.querySelector("form");
const item = document.getElementById("item");
const list = document.getElementById("list");
//For dynamic number
const li = document.getElementsByName("draggable");
const numberOfItems = document.getElementById("numberOfItems");
//For delete completed
const deleteBtn = document.querySelector(".clearCompleted");
//For Theme Color
const lightTheme = document.getElementById("sun");
const darkTheme = document.getElementById("moon");

// Light and Dark Theme
lightTheme.addEventListener("click", () => {
    document.body.classList.add("light");
    lightTheme.style.display = "none";
    darkTheme.style.display = "block";
});

darkTheme.addEventListener("click", () => {
    document.body.classList.remove("light");
    lightTheme.style.display = "block";
    darkTheme.style.display = "none";
});
//
//LocalStorage
//
let storeList = () => {
    window.localStorage.todoList = list.innerHTML;
};

let getTodo = () => {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    } else {
        list.innerHTML = `<li name="draggable" class="checked" draggable="true">Complete online Javascript course
    </li><li name="draggable" draggable="true">Jog around the park 3x</li><li name="draggable" draggable="true">10 minutes meditation</li><li name="draggable" draggable="true">Read for one hour</li><li name="draggable" draggable="true">Pick up groceries</li><li name="draggable" draggable="true">Complete Todo App on Frontend Mentor</li>`;
    }
};
getTodo();

//
//add a dynamic number for item left

let dynamicNumber = () => {
    let itemLength = li.length;
    numberOfItems.textContent = itemLength;
};

dynamicNumber();

//
//Add a Todo

function addTodo() {
    list.innerHTML += `<li name="draggable" draggable="true">${item.value}</li>`;
    item.value = "";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
    storeList();
    dynamicNumber();
});
//
//Add class checked or remove an element

list.addEventListener("click", (e) => {
    e.target.classList.toggle("checked");
    storeList();
    dynamicNumber();
});
console.log(li.length);

//
//Delete all checked element when click on clear completed

deleteBtn.addEventListener("click", () => {
    let listChecked = document.querySelectorAll(".checked");
    listChecked.forEach((todo) => todo.remove());
    storeList();
    dynamicNumber();
});

//
// https://codepen.io/gabrielferreira/pen/jMgaLe //
//DRAG AND DROP
//
function dragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function dragEnter(e) {}

function dragLeave(e) {
    e.stopPropagation();
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    return false;
}

function dragDrop(e) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
}

function dragEnd(e) {
    var listItens = document.getElementsByName("draggable");
    [].forEach.call(listItens, function (item) {
        item.classList.remove("over");
    });
    this.style.opacity = "1";
}

function addEventsDragAndDrop(el) {
    el.addEventListener("dragstart", dragStart, false);
    el.addEventListener("dragenter", dragEnter, false);
    el.addEventListener("dragover", dragOver, false);
    el.addEventListener("dragleave", dragLeave, false);
    el.addEventListener("drop", dragDrop, false);
    el.addEventListener("dragend", dragEnd, false);
}

var listItens = document.getElementsByName("draggable");
[].forEach.call(listItens, function (item) {
    addEventsDragAndDrop(item);
});
