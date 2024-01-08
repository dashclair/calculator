import "./styles.css";
import "./theme.js";
import add from "./operations/add.js";
import subtract from "./operations/subtract.js";
import multiply from "./operations/multiply.js";
import devide from "./operations/devide.js";
import oneDevideX from "./operations/oneDevideX.js";
import calcPercents from "./operations/calcPercents.js";
import factorialize from "./operations/factorialize.js";
import sqrRoot from "./roots/sqrRoot.js";
import cubeRoot from "./roots/cubeRoot.js";
import rootY from "./roots/rootY.js";
import square from "./exponentiation/square.js";
import thirdExponentiation from "./exponentiation/thirdExponentiation.js";
import tenthExponentiation from "./exponentiation/tenthExponentiation.js";
import xyExponentiation from "./exponentiation/xyExponentiation.js";

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

buttons.addEventListener("click", (event) => {
    const complexOpeartions = () => {
        switch (operator) {
            case "+":
                result = add(firstNum, secondNum);
                break;
            case "-":
                result = subtract(firstNum, secondNum);
                break;
            case "x":
                result = multiply(firstNum, secondNum);
                break;
            case "/":
                result = devide(firstNum, secondNum);
                break;
            case "xy":
                event.target.textContent === operator
                    ? (display.textContent = firstNum)
                    : (display.textContent = secondNum);
                result = xyExponentiation(firstNum, secondNum);
                return result;
            case "root y":
                event.target.textContent === operator
                    ? (display.textContent = firstNum)
                    : (display.textContent = secondNum);

                if (isNegative) {
                    result = "Error";
                } else {
                    result = rootY(firstNum, secondNum);
                }
                return result;
            case "x!":
                if (firstNum > 10) {
                    clearAll();
                    
                    return "Error";
                } else {
                    result = factorialize(firstNum);
                }
                
                firstNum = result;
                return (display.textContent = firstNum);
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
        if ( secondNum !== "" && operator !== "" && !event.target.dataset.deleteprev ) {
            firstNum = result;
            secondNum = "";
            isNegative = false;

            if (event.target.textContent === "=") {
                operator = "";
                return (display.textContent = firstNum);
            }
        }

        if (event.target.dataset.devidex) {
            result = oneDevideX(firstNum);
            firstNum = result;
            return (display.textContent = firstNum);
        }

        if (event.target.dataset.percents) {
            result = calcPercents(firstNum);
            firstNum = result;
            return (display.textContent = firstNum);
        }

        // change sign
        if (event.target.dataset.changesign) {
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
            return display.textContent = firstNum;
        }

        operator = event.target.textContent;
    }

    if (event.target.classList.contains("buttons__degree")) {
        if (!firstNum) {
            clearAll();
            return (display.textContent = "Error");
        }

        if (event.target.dataset.square) {
            result = square(firstNum);
        }

        if (event.target.dataset.third) {
            result = thirdExponentiation(firstNum);
        }

        if (event.target.dataset.tenth) {
            result = tenthExponentiation(firstNum);
        }

        firstNum = result;
        console.log(firstNum);
        return (display.textContent = firstNum);
    }

    if (event.target.classList.contains("buttons__root")) {
        if (isNegative || !firstNum || firstNum < 0) {
            clearAll();
            return (display.textContent = "Error");
        }

        if (event.target.dataset.rootsqr) {
            result = sqrRoot(firstNum);
        }

        if (event.target.dataset.rootcube) {
            result = cubeRoot(firstNum);
        }

        firstNum = result;
        return (display.textContent = firstNum);
    }

    if (event.target.dataset.rooty) {
        return (operator = event.target.dataset.rooty);
    }

    if (event.target.classList.contains("buttons__memory")) {
        memoryOperation(event.target.textContent);
    }

    display.textContent = firstNum + operator + secondNum;

    complexOpeartions();
});
