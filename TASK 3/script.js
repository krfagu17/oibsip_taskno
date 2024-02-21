   // Get the form and input elements
   const form = document.getElementById('todo-form');
   const input = document.getElementById('todo-input');

   // Get the todo list element
   const todoList = document.getElementById('todo-list');

   // Function to create a new todo item
   // Function to create a new todo item
   function createTodoItem(text) {
       const todoItem = document.createElement('li');
       todoItem.classList.add('todo-item');

       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.addEventListener('change', toggleCompletion);

       const label = document.createElement('label');
       label.textContent = text;

       const timestamp = document.createElement('span');
       timestamp.classList.add('timestamp');
       const date = new Date();
       timestamp.textContent = `Created at: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

       const deleteBtn = document.createElement('button');
       deleteBtn.classList.add('delete-btn');


       deleteBtn.textContent = 'Delete';
       deleteBtn.addEventListener('click', deleteTodoItem);
       const span1 = document.createElement('span');
       span1.classList.add('back');
       const span2 = document.createElement('span');
       span2.classList.add('front');



       deleteBtn.appendChild(span1);
       deleteBtn.appendChild(span2);
       todoItem.appendChild(checkbox);
       todoItem.appendChild(label);
       todoItem.appendChild(timestamp);
       todoItem.appendChild(deleteBtn);

       return todoItem;
   }

   // Function to add a new todo item
   function addTodoItem(event) {
       event.preventDefault();

       const text = input.value.trim();
       if (text !== '') {
           const todoItem = createTodoItem(text);
           todoList.appendChild(todoItem);
           input.value = '';
       }
   }

   // Function to toggle completion of a todo item
   function toggleCompletion(event) {
       const todoItem = event.target.parentNode;
       todoItem.classList.toggle('completed');
   }

   // Function to delete a todo item
// Function to delete a todo item
function deleteTodoItem(event) {
let todoItem = event.target;

// Ensure that the todoItem is the li element
while (todoItem.nodeName !== 'LI') {
   todoItem = todoItem.parentNode;
}

todoList.removeChild(todoItem);
}

   // Add event listener to the form
   form.addEventListener('submit', addTodoItem);