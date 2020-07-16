//selectors
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const tasks=document.querySelector(".tasksLeft");
const filterOption= document.querySelector('.filter-todo');

var taskCount=0;

//event listner

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change',filterTodo);


//functions

function addTodo(event){
	//prevent form from submitting
	event.preventDefault();

	if(todoInput.value==""){
		alert("Please insert a task");
		return;
	}
	//todo div
	
	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");

	//Create Li
	const newTodo= document.createElement('li');
	newTodo.innerText= todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	//check mark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML='<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	//trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML='<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	//append to list
	todoList.appendChild(todoDiv);

	//clear todo input value

	
	todoInput.value="";
	taskCount++;

	document.querySelector("#count").innerText= taskCount;

	
}


function deleteCheck(e){
	//console.log(e.target);
 	const item = e.target;
 	//delete todo
 	if(item.classList[0]=== 'trash-btn'){

 		const todo = item.parentElement;
 		if(todo.classList.contains('completed')){
 			
 			} else{taskCount--;}
 		
 		
 		todo.classList.add('fall');
 		todo.addEventListener('transitionend', function(){
 			
 				
 			
			
 			
 			todo.remove();
 			
 			
 		});

 		document.querySelector("#count").innerText= taskCount;
 		return;

 		//todo.remove();
 	}
 	else if(item.classList[0]=== "complete-btn"){
 		
 		const todo = item.parentElement;

 		if(todo.classList.contains('completed')){
 			taskCount++;
 		}else{
 			taskCount--;
 		}
 		todo.classList.toggle("completed");
 		

 	}

 	document.querySelector("#count").innerText= taskCount;

}
function filterTodo(e){
const todos = [...todoList.children];
todos.forEach(function(todo, index){
	switch (e.target.value) {
		case "all":
		todo.style.display= 'flex';
		break;

		case "completed":
		if(todo.classList.contains("completed")){
			todo.style.display =' flex';

		}
		else{
			todo.style.display = 'none';
		}
		break;
		case "uncompleted" :
				if(!todo.classList.contains("completed")){
					todo.style.display = "flex";
				}
				else{
					todo.style.display = "none";

				}

	}
});

}

// // task count
// const allLiItem = document.getElementsByTagName("Li");




// function taskCount(){

// var i;
// var totalTasks=0;
// for(i=0; i<allLiItem.length;i++){

		
// 		if(allLiItem[i].classList.contains('completed')){
// 			console.log("inside if loop");
			
// 		}
// 		else{
// 			totalTasks++;
// 		}
		
// 		console.log("inside loop");
// 	}
// 	console.log("taskCount is",totalTasks);
// 	



// }