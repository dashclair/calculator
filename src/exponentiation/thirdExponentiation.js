const thirdExponentiation = (firstNum) => {
    if(typeof firstNum === 'number') {
        console.log('firstNum',firstNum)
        return firstNum ** 3
    }
    return parseFloat(firstNum) ** 3;
};

module.exports = thirdExponentiation;
