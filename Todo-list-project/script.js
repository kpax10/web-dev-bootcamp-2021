let toDoList = [];


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
        console.log('delete')
    }

    initQuestion = prompt('What would you like to do?')
}


if (initQuestion === 'quit') {
    console.log('You quit')
}




// while promp = new, add object to array
//while prompt = list, console.log array
//while prompt = delete, prompt for "enter the index of the item to delete "
