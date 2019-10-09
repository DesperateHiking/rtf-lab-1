function addNumber(array, number) {
    const isNumArray = array.every(item => Number.isInteger(item));
    let sum = (parseInt(array.join(''), 10) + number).toString();

    return sum.split('').map(Number);
}

module.exports = {
    addNumber
};