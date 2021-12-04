const toDoList = [];

let initQuestion = prompt('What would you like to do?')
while (initQuestion !== 'quit') {
    //add item function
    if (initQuestion === 'new') {
        toDoList.push(prompt('Enter new todo:'))
        let displayItem = toDoList[toDoList.length - 1];
        console.log(`${displayItem} added to list`)
    }
    //list function
    if (initQuestion === 'list') {
        console.log('************')
        for (let items in toDoList) {
            console.log(`${items}: ${toDoList[items]}`)
        }
        console.log('************')
    }
    //delete function
    if (initQuestion === 'delete') {
        let deleteNum = parseInt(prompt('Item number do you want to delete:'))
        toDoList.splice(deleteNum, 1)
        console.log('Todo Removed')
    }
    initQuestion = prompt('What would you like to do?')
}

if (initQuestion === 'quit') {
    console.log('You quit')
}