

function caesarCipher(message, shift) {
    if (typeof(message) !== 'string') throw new TypeError('message must be a string value');
    if (typeof(shift) !== 'integer') throw new TypeError('shift must be an integer value');

    let result = '';

    // Create uppercase alphabet array
    // Create lowercase alphabet array

    // Iterate over string to see if it is in upper or lowercase alphabet array
        // Depending on which array it is in, return the character the shifted index amount
            // Check if shift exceeds array index, in which case loop back around to the start

    return result;
}

export default caesarCipher;
