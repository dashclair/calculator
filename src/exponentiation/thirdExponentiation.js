const thirdExponentiation = (firstNum) => {
    if (typeof firstNum === "number") {
        return firstNum ** 3;
    }

    firstNum = parseFloat(firstNum) ** 3;
    return firstNum;
};

module.exports = thirdExponentiation;
