'use strict';

let addBtn = document.querySelector('.add');
let taskInput = document.querySelector('.input_task');
let taskList = document.querySelector('.todo__list-ul');
let clearBtn = document.querySelector('.clear');


showTask();

addBtn.onclick = () => {
    if(taskInput.value == ""){
        alert('You must type something before adding...');
    }
    else{
        const newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value;
        newTask.classList.add('todo__list-ul-item');
        taskList.appendChild(newTask);
    }
    taskInput.value = "";
    saveData();
}

clearBtn.onclick = () =>{
    localStorage.clear();
}

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}