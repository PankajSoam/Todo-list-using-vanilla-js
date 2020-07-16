//selectors

const todoInput= document.querySelector(".todo-input"); 

const todoButton= document.querySelector(".todo-button");

const todoList= document.querySelector(".todo-list");

const tasks=document.querySelector(".tasksLeft");

const filterOption= document.querySelector('.filter-todo');


var taskCount=0; //will be used for counting uncompleted task

//event listner

todoButton.addEventListener("click", addTodo); //event listener when add button is clicked

todoList.addEventListener('click', deleteCheck); //event listener when delete button is clicked or complete task button is clicked

filterOption.addEventListener('change',filterTodo); //event listener to filter the different task category


//functions

function addTodo(event){
	//prevent form from submitting
	event.preventDefault();


	//preventing from adding empty task
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

	//update task count when new task is added
	taskCount++;

	document.querySelector("#count").innerText= taskCount;

	
}

//delete a task or mark as completed
function deleteCheck(e){
	

 	const item = e.target;
 	//delete todo
 	if(item.classList[0]=== 'trash-btn'){

 		const todo = item.parentElement;
 		if(todo.classList.contains('completed')){
 			//if the completed task is deleted then no need to modify taskcount
 			} else{
 				taskCount--; //if umcompleted task is deleted then decrease taskCount 
 			}
 		
 		//adding animation for deleting a task 
 		todo.classList.add('fall');
 		todo.addEventListener('transitionend', function(){
 			
 				
 			
			
 			
 			todo.remove();
 			
 			
 		});
 		//updating taskCount
 		document.querySelector("#count").innerText= taskCount;
 		return;

 		//todo.remove();
 	}
 	else if(item.classList[0]=== "complete-btn"){
 		
 		const todo = item.parentElement;

 		// handling task count when marking completed or uncompleted
 		if(todo.classList.contains('completed')){
 			taskCount++; 
 		}else{
 			taskCount--;
 		}

 		//toggling class between completed and uncompleted
 		todo.classList.toggle("completed");
 		

 	}

 	document.querySelector("#count").innerText= taskCount;

}


//function for handling filter task
function filterTodo(e){
const todos = [...todoList.children]; //collecting all children of ul tag

//for each child of ul below function is performed in order to filter the list
todos.forEach(function(todo, index){
	switch (e.target.value) {

		//showing all task
		case "all":
		todo.style.display= 'flex';
		break;


		//showing all completed task 
		case "completed":
		if(todo.classList.contains("completed")){
			todo.style.display =' flex';

		}
		else{
			todo.style.display = 'none';
		}
		break;


		//showing all incomplete task
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

//alternate function for taskcount

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
		
// 		
// 	}
// 	console.log("taskCount is",totalTasks);
// 	



// }