// takes an array of numbers and returns an object with the following properties: average, min, max, and length.
function analyzeArray(nums) {
    if (!Array.isArray(nums)) {
        throw new Error('Input must be an array');
    } 

    if (nums.length === 0) {
        throw new Error('Array cannot be empty');
    }

    const average = nums.reduce((sum, num) => sum + num, 0) / nums.length;
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return { average, min, max, length: nums.length };
}

module.exports = { analyzeArray };
