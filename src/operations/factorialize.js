const factorialize = (firstNum) => {
    if ( !firstNum || firstNum === "0" || firstNum === 0 || firstNum === 1 ) {
       firstNum = 1;
    } else if (firstNum < 0 ){
        firstNum = 'Error'
    } else {
        for (let i = firstNum - 1; i >= 1; i--) {
            firstNum *= i;
        }
    }
    
    return firstNum;;
};

module.exports = factorialize;