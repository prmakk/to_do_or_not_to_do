'use strict';

let addBtn = document.querySelector('.add');
let taskInput = document.querySelector('.input_task');
let taskList = document.querySelector('.todo__list-ul');
let clearBtn = document.querySelector('.clear');
let task = document.querySelector('.todo__list-ul-item');

showTask();

addBtn.onclick = () => {
    let displayMsg = '';
    if(taskInput.value == ""){
        alert('You must type something before adding...');
    }
    else{
        displayMsg += `
        <li class="todo__list-ul-item">
            <label>${taskInput.value}</label>
            <input type="checkbox" class="checkboxInput">
         </li>
        `
        taskList.innerHTML += displayMsg;
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

 
