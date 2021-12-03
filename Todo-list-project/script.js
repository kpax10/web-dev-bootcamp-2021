const toDoList = [];

let initQuestion = prompt('What would you like to do?')
while (initQuestion !== 'quit') {
    while (initQuestion === "new") {
        console.log('new!')
        break
    }
    initQuestion = prompt('What would you like to do?')
}



// while (initQuestion !== "quit") {
//     console.log("yay")
// initQuestion = prompt("What would you like to do?")
// if (initQuestion === "new") {
// let addedItem = toDoList.push(prompt("Enter new todo:"))
// console.log(addedItem[toDoList])



if (initQuestion === "quit") {
    console.log("YOU QUIT")
}




// while promp = new, add object to array
//while prompt = list, console.log array
//while prompt = delete, prompt for "enter the index of the item to delete "
