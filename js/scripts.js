//bussiness logic

// Describe: List();

// Test: It will add tasks to empty Tasks array.
// Expect: List.addTask(task).toEqual(tasks.push);
function List(){
  this.tasks = [];
}

List.prototype.addTask = function(task){
  this.tasks.push(task);
}

function Tasks(todo){
  this.todo = todo;
}

let list = new List();

let todo1 = new Tasks ("review");
let todo2 = new Tasks ("read homework");

list.addTask(todo1);
list.addTask(todo2);

//user interface logic