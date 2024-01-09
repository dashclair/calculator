const cubeRoot = (firstNum) => {
    console.log(firstNum);
    if (typeof firstNum === "number") {
        return firstNum ** (1 / 3);
    } else {
        return parseFloat(firstNum) ** (1 / 3);
    }
};

module.exports = cubeRoot;