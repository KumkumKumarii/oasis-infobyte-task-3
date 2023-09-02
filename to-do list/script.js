const taskInput = document.getElementById('taskInput');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return; 
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => completeTask(taskItem));

    taskItem.appendChild(completeButton);
    pendingList.appendChild(taskItem);

    taskInput.value = ''; 
}

function completeTask(taskItem) {
    const taskText = taskItem.textContent;
    taskItem.remove();

    const completedItem = document.createElement('li');
    completedItem.textContent = taskText;

    completedList.appendChild(completedItem);
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
