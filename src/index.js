import "./styles.css";
import "./theme.js";

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
let memory = 0;

let isNegative = false;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

// clearing
const clearAll = () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    isNegative = false;
    display.textContent = "";
};

const deletePreviousSymbol = () => {
    if (typeof firstNum === "number") {
        firstNum = "";
    }

    if (secondNum !== "") {
        secondNum = secondNum.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
    } else if (firstNum !== "") {
        firstNum = firstNum.slice(0, -1);
    }

    isNegative = false;

    display.textContent = display.textContent.slice(0, -1);
    return;
};

// operations

const add = () => {
    result = parseFloat(firstNum) + parseFloat(secondNum);
};

const subtract = () => {
    result = parseFloat(firstNum) - parseFloat(secondNum);
};

const multiply = () => {
    result = parseFloat(firstNum) * parseFloat(secondNum);
};

const devide = () => {
    if (secondNum === "0") {
        return (result = "Error");
    } else {
        result = parseFloat(firstNum) / parseFloat(secondNum);
    }
};

const factorialize = () => {
    if (firstNum > 10) {
        clearAll();
        
        result = 'Error'
        return;
    }

    if (
        firstNum === "" ||
        firstNum === "0" ||
        firstNum === 0 ||
        firstNum === 1 ||
        firstNum < 0
    ) {
        firstNum = 1;
    } else {
        for (let i = firstNum - 1; i >= 1; i--) {
            firstNum *= i;
        }
    }
    result = firstNum;
    return result;
};

const oneDevideX = () => {
    result = 1 / parseFloat(firstNum);
};

const calcPercents = () => {
    result = firstNum / 100;
};

// degrees

const square = () => {
    result = parseFloat(firstNum) ** 2;
};

const thirdExponentiation = () => {
    result = parseFloat(firstNum) ** 3;
};

const tenthExponentiation = () => {
    result = 10 ** parseFloat(firstNum);
};

const xyExponentiation = () => {
    result = parseFloat(firstNum) ** secondNum;
};

// roots

const rootY = () => {
    result = parseFloat(firstNum) ** parseFloat(1 / secondNum);
};

const sqrRoot = () => {
    if(typeof firstNum === 'number') {
        result = firstNum ** 0.5
    }else {
        result = parseInt(firstNum) ** 0.5;
    }
};

const cubeRoot = () => {
    if(typeof firstNum === 'number') {
        result = firstNum ** (1/3);
    } else {
        result = parseFloat(firstNum) ** (1/3);
    }
};

// memory operations
const memoryClear = () => {
    memory = 0;
};

const memoryAdd = () => {
    if (firstNum === "") {
        return memory;
    }

    if (secondNum !== "") {
        return (memory += parseFloat(secondNum));
    }

    memory += parseFloat(firstNum);
};

const memoryRecall = () => {
    if (memory === 0) {
        return (firstNum = "");
    }

    operator !== "" ? (secondNum = memory) : (firstNum = memory);
    console.log(memory);
};

const memorySubtract = () => {
    if (memory === "" || memory === 0) {
        return "";
    }

    if (secondNum !== "") {
        memory -= parseFloat(secondNum);
    } else {
        memory -= parseFloat(firstNum);
    }
};

const memoryOperation = (operation) => {
    switch (operation) {
        case "MC":
            memoryClear();
            break;
        case "M+":
            memoryAdd();
            break;
        case "M-":
            memorySubtract();
            break;
        case "MR":
            memoryRecall();
            break;
        default:
            break;
    }
};

// operations

buttons.addEventListener("click", (event) => {
    
    const displayNumbers = () => {
        if (!secondNum && operator === "") {
            if (isNegative && firstNum === "") {
                firstNum = "-" + event.target.textContent;
            } else {
                firstNum === "" || firstNum === 0 || result === 0 
                ? (firstNum = event.target.textContent) 
                : (firstNum += event.target.textContent);
            }
        } else {
            secondNum += event.target.textContent;
        }
    };

    const changingSign = () => {
        if (result < 0) {
            result = result.toString();
            result = result.slice(1);
            firstNum = result;
            display.textContent = result;
            return firstNum;
        } else if (result > 0) {
            result = result.toString();
            isNegative = true;
            firstNum = "-" + result;
            return (display.textContent = firstNum);
        } else if (firstNum && !isNegative) {
            isNegative = true;
            firstNum = "-" + firstNum;
        } else if (firstNum && isNegative) {
            isNegative = false;
            result = result.toString();
            firstNum = firstNum.slice(1);
        }
        display.textContent = firstNum;
    };

    const complexOpeartions = () => {
        switch (operator) {
            case "+":
                add();
                break;
            case "-":
                subtract();
                break;
            case "x":
                multiply();
                break;
            case "/":
                devide();
                break;
            case "xy":
                event.target.textContent === operator
                    ? (display.textContent = firstNum)
                    : (display.textContent = secondNum);
                return xyExponentiation();
            case "root y":
                event.target.textContent === operator
                    ? (display.textContent = firstNum)
                    : (display.textContent = secondNum);
                console.log("first num", firstNum);
                return rootY();
            case "x!":
                factorialize();

                return (display.textContent = result);
            default:
                break;
        }
    };

    // setting restriction for clicking not a button
    if (
        !event.target.matches(
            ".buttons__operation, .buttons__numbers, .buttons__memory, .buttons__degree, .buttons__root, .buttons__degree"
        )
    )
        return;

    // clearing the display and store on AC btn
    if (event.target.dataset.clear) {
        return clearAll();
    }

    // deleting previous character on C btn
    if (event.target.dataset.deleteprev) {
        return deletePreviousSymbol();
    }

    // storing and displaying the numbers
    if (event.target.classList.contains("buttons__numbers")) {
        displayNumbers();
    }

    // operators
    if (event.target.classList.contains("buttons__operation")) {
        // checking empty operators
        if (firstNum === "" && event.target.textContent !== "-") {
            return "";
        }

        // setting isNegative after clicling -
        if (event.target.textContent === "-" && firstNum === "") {
            isNegative = true;
            return;
        }

        // calculation
        if (secondNum !== "" && operator !== "" && !event.target.dataset.deleteprev
        ) {
            firstNum = result;
            secondNum = "";
            isNegative = false;

            if (event.target.textContent === "=") {
                operator = "";
                return (display.textContent = firstNum);
            }
        }

        if (event.target.dataset.devidex) {
            oneDevideX();
            firstNum = result;
            return (display.textContent = firstNum);
        }

        // change sign
        if (event.target.dataset.changesign) {
            changingSign();
            return;
        }

        // percentage
        if (event.target.dataset.percents) {
            calcPercents();
            firstNum = result;
            return (display.textContent = firstNum);
        }

        operator = event.target.textContent;
    }

    // sqr, cube and tenth
    if (event.target.classList.contains("buttons__degree")) {
        if (!firstNum) {
            clearAll();
            return (display.textContent = "Error");
        }
        // x2
        if (event.target.dataset.square) {
            square();
        }

        // x3
        if (event.target.dataset.third) {
            thirdExponentiation();
        }

        // 10x
        if (event.target.dataset.tenth) {
            tenthExponentiation();
        }

        firstNum = result;

        return (display.textContent = firstNum);
    }

    // roots
    if (event.target.classList.contains("buttons__root")) {
        if (isNegative || !firstNum) {
            console.log(firstNum);
            clearAll();
            return (display.textContent = "Error");
        }

        if (event.target.dataset.rootsqr) {
            sqrRoot();
        }

        if (event.target.dataset.rootcube) {
            cubeRoot();
        }

        firstNum = result;
        return (display.textContent = firstNum);
    }

    if (event.target.dataset.rooty) {
        return (operator = event.target.dataset.rooty);
    }

    // memory operations
    if (event.target.classList.contains("buttons__memory")) {
        memoryOperation(event.target.textContent);
    }

    display.textContent = firstNum + operator + secondNum;

    complexOpeartions();
});


