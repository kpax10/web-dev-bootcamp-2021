let initQuestion = prompt("What would you like to do?");
const toDoList = [];


while (initQuestion !== "quit") {
    if (initQuestion === "new") {
        let addedItem = toDoList.push(prompt("Enter new todo:"))
        console.log(addedItem)
    }
}
if (initQuestion === "quit") {
    console.log("YOU QUIT")
}







// while promp = new, add object to array
//while prompt = list, console.log array
//while prompt = delete, prompt for "enter the index of the item to delete "
