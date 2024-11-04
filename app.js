function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
      const li = document.createElement('li');
    li.textContent = taskText;
  
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
  
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(event) {
      event.stopPropagation(); 
      li.remove();
    });
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = '';
  }
  