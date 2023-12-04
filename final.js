/*
Project Task

You will be building a full todo list in the browser. It should be able to add todos, check todos off as complete, and delete todos.

✓    Display a form to the user to add todos.
-    When a user types a todo into the form and hits submit, the following should happen:
✓        A new todo should be displayed below any previous todos
✓        Every todo in the list should have a check button next to it to check off the todo and mark it complete
x            Clicking the check should change the todo in someway, either marking it green or perhaps crossing it out. Check out this link here 
✓        Every todo should have an x to the right that will delete the todo.
x            Clicking the x should remove the todo from the page.
✓    You'll need to attach a submit event listener to todo form and click event listeners to the check and x for each todo.
-    Your JavaScript code will form the conditional logic to determine whether a todo should be displayed as complete or incomplete.

Recommended Implementation:

✓    Individual todos should be represented in an object with a text key and a complete key (the complete key should be a boolean true or false).
✓    Individual todo objects should be stored inside an array, making an array of objects.
ok    Representing the above in your JavaScript makes the project much easier rather than stressing about the HTML and the click events.
*/

let allTodos = [];
const ul = document.createElement('ul');
let todoObject = {};
const body = document.querySelector('body');

document.querySelector('#addToDo').addEventListener("submit",function(event){
    event.preventDefault();
    todoObject = {
        text: document.querySelector('input').value,
        completed: false,
    };
    allTodos.push(todoObject);
    
    const list = allTodos.map(todo => `
        <li>
            <p>${todo.text}</p>
            <button id="deleteButton">X</button>
            <input type="checkbox" id="completedBox">
        </li>
    `);
    
    ul.innerHTML = list.join('');
    body.appendChild(ul);
    
});

if ('#deleteButton') {
    ul.addEventListener('click',function() {
        console.log('This is where I\'d splice my array... if I could!')
    })
}

if ('#completedBox') {
    ul.addEventListener('click', function() {
        console.log('This is where I\'d add CSS... if this weren\'t connected to the delete button for some reason!')
    })
}

//I could not figure out how to get the specific objects. no getElement method worked on ul, list, or body properly. 