/* Return the shifted index
 * 
 * If the shift 
 */
function shiftIndex(index, shift) {
    const shifted = index + shift;
    if (shifted > 26) {
        return shifted % 26;
    } else return shifted;
}

function caesarCipher(message, shift) {
    if (typeof(message) !== 'string') throw new TypeError('message must be a string value');
    if (!Number.isInteger(shift)) throw new TypeError('shift must be an integer value');

    // Create uppercase and lowercase alphabet arrays
    const upperAlphabet = Array.from({length: 26}, (_,i) => String.fromCharCode(i + 65));
    const lowerAlphabet = Array.from({length: 26}, (_,i) => String.fromCharCode(i + 97));

    const messageArray = message.split('');
    const resultArray = [];

    for (const char of messageArray) {
        if (upperAlphabet.includes(char)) {
            let charIndex = upperAlphabet.indexOf(char);
            resultArray.push(upperAlphabet[shiftIndex(charIndex, shift)]);
        } else if (lowerAlphabet.includes(char)) {
            let charIndex = lowerAlphabet.indexOf(char);
            resultArray.push(lowerAlphabet[shiftIndex(charIndex, shift)]);
        } else if (char === ' ') {
            resultArray.push(char);
        } else {
            console.log(char);
            throw new TypeError('message must only contain alphabet characters and spaces');
        }
    }
    
    return resultArray.join('');
}

export default caesarCipher;
