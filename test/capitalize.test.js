import capitalize from '../src/capitalize';

test('Capitalizes first character', () => {
    expect(capitalize('word')).toBe('Word');
});
