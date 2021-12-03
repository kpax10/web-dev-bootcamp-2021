let toDoList = [];


let initQuestion = prompt('What would you like to do?')
while (initQuestion !== 'quit') {
    if (initQuestion === "new") {
        toDoList.push(prompt('Enter new todo:'))
        let displayItem = toDoList[toDoList.length - 1];
        console.log(`${displayItem} added to list`)
    }
    if (initQuestion === "list") {
        // let arrLocation = toDoList.length - 1;
        console.log('************')
        for (let items in toDoList) {
            console.log(`${items}: ${toDoList[items]}`)
        }
        console.log('************')
    }
    initQuestion = prompt('What would you like to do?')
}


if (initQuestion === "quit") {
    console.log("YOU QUIT")
}




// while promp = new, add object to array
//while prompt = list, console.log array
//while prompt = delete, prompt for "enter the index of the item to delete "
