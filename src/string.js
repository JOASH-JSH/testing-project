// Takes a string and returns it with the first character capitalized.
function capitalize(str) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.replace(/([a-zA-Z\u00C0-\u017F])/, (match) => match.toUpperCase());
}

// Takes a string and returns it reversed.
function reverseString(str) {
    if (typeof str !== 'string') {
        return null;
    }

    return str.split('').reverse().join('');
}

module.exports = { capitalize, reverseString };
