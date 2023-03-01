function analyzeArray(numberArray) {

    if (!Array.isArray(numberArray)) throw new TypeError('numberArray argument must be of type array');
    
    for (let item of numberArray) {
        if (typeof(item) !== 'number') throw new TypeError('numberArray must only contain values of type number');
    }

    return {
        average: numberArray.reduce((initial, num) => initial + num, 0)/numberArray.length,
        min: Math.min(...numberArray),
        max: Math.max(...numberArray),
        length: numberArray.length
    }
}

export default analyzeArray;
