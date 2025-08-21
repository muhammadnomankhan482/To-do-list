var todos = [];
var updateButton = document.getElementById("update-button");
var addButton = document.getElementById("add-button");
var inputElement = document.getElementById("todo");
var editIndex 

function addTodo(){
    if(inputElement.value === ""){
        alert("Please add somethings")
    return;
    }
    todos.push(inputElement.value);
    inputElement.value = "";
    showList();
}

function showList(){
    var listItem = document.getElementById("todo-list");
    listItem.innerHTML = "";
    for(var i=0; i<todos.length; i++){
        listItem.innerHTML +=`<li> ${todos[i]} <button id="edit-button" onclick="editTodo(${i})">Edit </button> <button id="delete-button" onclick="deleteTodo(${i})">Delete </button></li>`
    }
}

function deleteTodo(index){
    todos.splice(index,1);
    showList();
}

function editTodo(index){
    inputElement.value = todos[index];
    editIndex = index;
    addButton.style.display = "none";
    updateButton.style.display = "inline-block";
}

function updateTodo(){
    if(inputElement.value === ""){
        alert("Please add something!")
        return;
    }

//update todo
    todos[editIndex] = inputElement.value;
    inputElement.value = "";

//update button
    addButton.style.display ="inline-block";
    updateButton.style.display ="none";
    showList();
}