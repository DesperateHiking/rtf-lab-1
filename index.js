function addNumber(array, number) {
    if (array.every(item => Number.isInteger(item) && item.toString().length === 1))
        return (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
    return null;
}

module.exports = {
    addNumber
};