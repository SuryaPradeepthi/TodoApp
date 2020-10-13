const todos=[];
const form =document.getElementById("list");
const push = function(e){
    e.preventDefault();
    let item = document.getElementById("ip").value;
    todos.push(item);
    display();
    document.getElementById("ip").value="";

}
const display=function(){
    let button=document.createElement("button");
    let newItem = document.createElement("li");
    let orderedList =document.getElementById("MyList");

todos.forEach(function(todo){
    newItem.textContent=todo;
    button.textContent="X";
    button.addEventListener("click",function(){
        newItem.remove();
    })
newItem.appendChild(button);
orderedList.appendChild(newItem);
})
}
form.addEventListener('submit',push);