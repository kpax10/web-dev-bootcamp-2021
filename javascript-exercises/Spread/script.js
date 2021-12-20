//SPREAD IN FUNCTION CALLS

const nums = [1, 2, 4, 8, 43, 4, 123, 7454]

Math.max(...nums)
Math.min(...nums)


//This will spread out the letters when console logged to show 'h e l l o
console.log(...'hello')


//SPREAD WITH ARRAY LITERALS

const dogs = ['Blue', 'Scout', 'Rocket']
const cats = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs, 'Speedy']


console.log(allPets)


//SPREAD WITH OBJECTS

const feline = { legs: 4, family: 'Felinae' }
const canine = { isFurry: true, family: 'Caninae' }
//will output {legs: 4, family: 'Caninae', isFurry: true} Caninae wins because it comes last
const catDog = { ...feline, ...canine }



const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke',
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false }