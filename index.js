function addNumber(array, number) {
    if (array.some(item => !Number.isInteger(item) || item.toString().length !== 1))
        return null;
    return (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
}

module.exports = {
    addNumber
};