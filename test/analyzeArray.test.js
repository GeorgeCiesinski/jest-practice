import analyzeArray from '../src/analyzeArray';

test('function only accepts array', () => {
    expect(() => {
        analyzeArray('Not an array');
    }).toThrow(new TypeError('numberArray argument must be of type array'));
});

test('array only contains numbers', () => {
    expect(() => {
        analyzeArray([1, 2, 'string', {"key": "value"}]);
    }).toThrow(new TypeError('numberArray must only contain values of type number'));
});

test('array of range 1 to 9 returns returns an average value of 5', () => {
    const testArray = Array.from({length: 9}, (_, i) => i + 1);
    const expectedObject =  {
        average: 5,
        min: 1,
        max: 9,
        length: 9
    };
    expect(analyzeArray(testArray)).toMatchObject(expectedObject);
});
