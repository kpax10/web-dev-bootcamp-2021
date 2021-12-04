let input = prompt('What would you like to do?')
const todos = ['ham', 'turkey'];
while (input !== 'quit') {
    if (input === 'list') {
        console.log('****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            todos.splice(index, 1);
            console.log('Todo removed');
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?')
}
console.log('Ok, you quit the app')