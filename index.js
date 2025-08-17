var todos =[];
var updateButton = document.getElementById("update-button");
var addButton = document.getElementById("add-button");
// var inputElement = getElementById("todo");
function addTodo(){
    var inputElement = document.getElementById("todo");
    if(inputElement===""){
        alert("Please add somethings")
    }
    todos.push(inputElement.value);
    inputElement.value = "";
    showList()
}

function showList(){
    var listItem = document.getElementById("todo-list") 
    listItem.innerHTML = ""
    for(var i=0; i<todos.length; i++){
        listItem.innerHTML +=`<li> ${todos[i]} <button onclick="deleteTodo(${i})">Delete </button></li>`
    }
}
function deleteTodo(index){
    todos.splice(index,1)
    showList()
}
showList()