let add = (x, y) => x + y;

let subtract = (x, y) => x - y;

let multiply = (x, y) => x * y;

let divide = (x, y) => {
    if (y === 0) {
        throw new RangeError('Divisor cannot be zero');
    }

    return x / y;
}

let calculator = {
    add, 
    subtract,
    multiply,
    divide
}

export default calculator;
