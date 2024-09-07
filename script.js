function addTask(){
    var taskText=document.getElementById("taskInput").value;
    if (taskText==="") {
      alert("Please enter a task");
      return;
    }
  var listItem=document.createElement("li");
    var taskNode=document.createTextNode(taskText);
    listItem.appendChild(taskNode);
  var completeButton=document.createElement("button");
    completeButton.innerHTML="✔️";
    completeButton.onclick = function () {
      listItem.classList.toggle("completed");
    };
    listItem.appendChild(completeButton);
  var deleteButton=document.createElement("button");
    deleteButton.innerHTML="🗑️";
    deleteButton.onclick = function() 
    {
      listItem.remove();
    };
    listItem.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(listItem);
    document.getElementById("taskInput").value="";
  }
  