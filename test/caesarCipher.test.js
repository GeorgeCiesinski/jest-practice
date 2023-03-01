import caesarCipher from '../src/caesarCipher';

test('message only accepts string value', () => {
    expect(() => {caesarCipher(45, 5)}).toThrow(TypeError);
});

test('shift only accepts int value', () => {
    expect(() => {caesarCipher('The Zebras attack at dawn', 'The Zebras attack at dawn')}).toThrow(TypeError);
});

test('message only contains alphabet characters', () => {
    expect(() => {caesarCipher('This message contains the number 9')}).toThrow(TypeError);
});

test('Shifts sentence by 5', () => {
    expect(caesarCipher('The Zebras attack at dawn', 5)).toBe('Ymj Ejgwfx fyyfhp fy ifbs');
});
