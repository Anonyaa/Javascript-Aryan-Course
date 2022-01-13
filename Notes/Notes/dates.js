// const rand = Math.random()
// const min = 0 
// const max = 10

//const randomNumber = (Math.floor(random(max-min)) + min

function randRange(min = 2,max = 80) {
    const output = Math.floor(Math.random() * (max-min)) + min; 
    return output;
}
console.log(randRange(0, 10));
console.log(randRange());