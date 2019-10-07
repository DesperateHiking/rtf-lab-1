function addNumber(array, number) {
    let sum = '';

    for (let e of array) {
        if (Number.isInteger(e) && e.toString().length === 1)
            sum += e.toString();
        else return null;
    }

    sum = (parseInt(sum) + number).toString();

    return sum.split('').map(Number);
}

module.exports = {
    addNumber
};