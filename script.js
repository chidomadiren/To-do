let tasks = []; 

const task = document.getElementById('task');
const list = document.getElementById('list');

document.getElementById('Add Task').addEventListener('click', () => {
  if(task.value === '') return; 
  
  const time = new Date().toLocaleString(); 
  const li = document.createElement('li'); 
  
  li.innerHTML = `${task.value} <span>${time}</span> <button class="del">Delete</button>`; 
  
  li.querySelector('.del').onclick = () => li.remove();
  list.appendChild(li); 
  task.value = ''; 
});