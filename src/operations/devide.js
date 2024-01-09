const devide = (firstNum, secondNum) => {
    if (secondNum === "0") {
        return ("Error");
    } else {
        return parseFloat(firstNum) / parseFloat(secondNum);
    }
};

module.exports = devide;