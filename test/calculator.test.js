import calculator from '../src/calculator';

test('Add two numbers together', () => {
    expect(calculator.add(4, 5)).toBe(9);
});

test('Subtract two numbers', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test('Multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('Divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('Divide by zero error', () => {
    expect(() => {calculator.divide(5, 0)}).toThrow(RangeError);
});
