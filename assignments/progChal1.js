function read() {
    const fs = require ('fs');
    const data = (fs.readFileSync("PC1input.txt", "utf8"));
    return data;
}

function partone() {
    let data = read().split("\n");
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] < data[i+1]) {
            count++
        }
        
    }
}
function dataJump() {
    for (let i = 0; i < data.length; i++) {
        if (data[i+1] - data[i] > size) {
            size = dataJump + 1;
        }
    }
}
