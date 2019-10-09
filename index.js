function addNumber(array, number) {
    if (array.every(item => Number.isInteger(item)))
        return (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
    return null;
}

module.exports = {
    addNumber
};