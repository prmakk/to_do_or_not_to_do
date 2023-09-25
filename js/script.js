'use strict';

let addBtn = document.querySelector('.add');
let taskInput = document.querySelector('.input_task');
let taskList = document.querySelector('.todo__list-ul');
let clearBtn = document.querySelector('.clear');
let task = document.querySelector('.todo__list-ul-item');

window.onload = () => {
    showTask();
    deleteTask();
    doneTask();
}

addBtn.onclick = () => {
    let displayMsg = '';
    if(taskInput.value == ""){
        alert('You must type something before adding...');
    }
    else if (taskInput.value.length >= 16){
        alert('Enter a task less than 16 characters');
    }
    else{
        location.reload();
        displayMsg += `
        <li class="todo__list-ul-item">
            <input type="checkbox" class="checkboxInput">
            <label>${taskInput.value}</label>
            <i class="gg-trash"></i>
         </li>
        `
        taskList.innerHTML += displayMsg;
        deleteTask();
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

function deleteTask(){
    const deleteButtons = document.querySelectorAll('.gg-trash');

    deleteButtons.forEach(button => {
        button.onclick = () =>{
            button.parentNode.remove();
            saveData();
        }
    });
}

function doneTask(){
    const allCheckboxes = document.querySelectorAll('.checkboxInput');
    allCheckboxes.forEach(chk => {
        chk.onchange = () =>{
            chk.parentNode.remove();
            saveData();
        }
    });
}
