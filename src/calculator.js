// Basic calculator
class Calculator {
    add(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid data type');
        }

        return num1 + num2;
    }

    subtract(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid data type');
        } 

        return num1 - num2;
    }

    divide(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid data type');
        }

        if (num2 === 0) {
            throw new Error('Division by zero');
        }

        return num1 / num2;
    }

    multiply(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Invalid data type');
        }
        
        return num1 * num2;
    }
}

module.exports = Calculator;
