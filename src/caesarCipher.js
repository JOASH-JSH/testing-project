// Takes a string and a shift factor and returns it with each character “shifted”.
function caesarCipher(str, shiftFactor) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.split('').reduce((result, char) => {
        const charCode = char.charCodeAt();

        if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
            return result + getShiftedChar(charCode, shiftFactor);
        }

        return result + char;
    }, ''); 
}

function getShiftedChar(charCode, shiftFactor) {
    const lowerCase = [
        'a', 'b', 'c', 'd', 
        'e', 'f', 'g', 'h', 
        'i', 'j', 'k', 'l', 
        'm', 'n', 'o', 'p', 
        'q', 'r', 's', 't', 
        'u', 'v', 'w', 'x', 
        'y', 'z'
    ];

    const upperCase = [
        'A', 'B', 'C', 'D', 
        'E', 'F', 'G', 'H', 
        'I', 'J', 'K', 'L', 
        'M', 'N', 'O', 'P', 
        'Q', 'R', 'S', 'T', 
        'U', 'V', 'W', 'X', 
        'Y', 'Z'
    ];

    const caseType = charCode >= 97 ? true : false; // true -> lowercase & false -> uppercase
    const index = (caseType ? charCode - 97 : charCode - 65) + shiftFactor;

    let charIndex = index;
    
    if (charIndex < 0) {
        while (charIndex < 0) {
            charIndex += 26;
        }
    } else {   
        while (charIndex >= 26) {
            charIndex -= 26;
        }    
    }

    return caseType ? lowerCase[charIndex] : upperCase[charIndex];
}

module.exports = { caesarCipher };
