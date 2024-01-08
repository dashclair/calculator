const sqrRoot = (firstNum) => {
    if (typeof firstNum === "number") {
        return firstNum ** 0.5;
    } else {
        return parseInt(firstNum) ** 0.5;
    }
};

export default sqrRoot;
