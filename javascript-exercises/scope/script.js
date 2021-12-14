// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
//     console.log(totalEggs)
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);


// let bird = 'Scarlet Macaw';
// function birdwatch() {
//     let bird = 'Great Blue Heron';
// }


// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }

// console.log(radius);


function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`)
            }
        }
        inner();
    }
    cryForHelp();
}