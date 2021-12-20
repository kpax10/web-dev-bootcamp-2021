//Will wait x amount of time to run
setTimeout(() => {
    console.log('Hello!!!')
}, 3000)

//will continuously run every x ms
//Assigning a variable will allow you to stop the running by calling clearInterval(stop)
const stop = setInterval(() => {
    console.log(Math.random())
}, 2000)