function addNumber(array, number) {
    return array.some(item => !Number.isInteger(item) || item.toString().length !== 1) ?
        null : (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
}

module.exports = {
    addNumber
};