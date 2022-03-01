let myArray = ['A', 'B', 'A', 'C', 'B'];

let e = [];
myArray.forEach((c) => {
    if (!e.includes(c)) {
        e.push(c);
    }
});

console.log(e);