let zero = document.getElementById(`zero`);
let one = document.getElementById(`one`);
let two = document.getElementById(`two`);
let three = document.getElementById(`three`);
let four = document.getElementById(`four`);
let five = document.getElementById(`five`);
let six = document.getElementById(`six`);
let seven = document.getElementById(`seven`);
let eight = document.getElementById(`eight`);
let nine = document.getElementById(`nine`);

let sum = document.getElementById(`sum`);
let subtract = document.getElementById(`subtract`);
let multiply = document.getElementById(`multiply`);
let divide = document.getElementById(`divide`);

let equal = document.getElementById(`equal`);
let dot = document.getElementById(`dot`);
let clear = document.getElementById(`clear`);
let change1 = document.getElementById(`change1`);
let percent = document.getElementById(`percent`);

let result = document.getElementById(`result`);
result.innerText = `0`;

let firstInput = ``;
let secondInput = ``;
let sumClickButton = false;
let subtractClickButton = false;
let multiplyClickButton = false;
let divideClickButton = false;
let dotClickButton = false;

zero.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `0`;
    result.innerText += input;

}, false);


one.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `1`;
    result.innerText += input;

}, false);

two.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `2`;
    result.innerText += input;

}, false);

three.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `3`;
    result.innerText += input;
})
four.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `4`;
    result.innerText += input;
})
five.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `5`;
    result.innerText += input;
})
six.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `6`;
    result.innerText += input;
})
seven.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `7`;
    result.innerText += input;
})
eight.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `8`;
    result.innerText += input;
})
nine.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        result.innerText = ``;
    }

    let input = `9`;
    result.innerText += input;
})


console.log(firstInput);


sum.addEventListener(`click`, function () {

    firstInput = parseFloat(result.innerText);
    result.innerText = ``;
    sumClickButton = true;
    multiplyClickButton = false;
    divideClickButton = false;
    dotClickButton = false;

}, false);


subtract.addEventListener(`click`, function () {

    firstInput = result.innerText;
    result.innerText = ``;
    subtractClickButton = true;
    sumClickButton = false;
    multiplyClickButton = false;
    dotClickButton = false;

}, false);


multiply.addEventListener(`click`, function () {
    multiplyClickButton = true;
    sumClickButton = false;
    dotClickButton = false;
    if (result.innerText === ``) {
        return result.innerText = `error`

    } else {
        firstInput = result.innerText;
        result.innerText = ``
    }

}, false);


divide.addEventListener(`click`, function () {
    divideClickButton = true;
    sumClickButton = false;
    multiplyClickButton = false;
    dotClickButton = false;
    if (result.innerText === ``) {
        return result.innerText = `error`

    } else {
        firstInput = result.innerText;
        result.innerText = ``
    }
}, false);

dot.addEventListener(`click`, function () {

    if (dotClickButton) {
        return result.innerText;
    }

    dotClickButton = true;
    result.innerText += `.`;

}, false);


clear.addEventListener(`click`, function () {

    result.innerText = `0`;
    firstInput = ``;
    secondInput = ``;
    sumClickButton = false;
    subtractClickButton = false;
    multiplyClickButton = false;
    divideClickButton = false;
    dotClickButton = false;

}, false);

change1.addEventListener(`click`, function () {

    if (result.innerText === `0`) {
        return result.innerText = `0`;
    }

    if (result.innerText.charAt(0) !== `-`) {
        return result.innerText = `-` + result.innerText;
    }

    if (result.innerText.charAt(0) === `-`) {
        return result.innerText = result.innerText.substring(1);
    }

}, false)


percent.addEventListener(`click`, function () {

    // firstInput = parseFloat(result.innerText);
    console.log(firstInput);
    console.log(secondInput);

    secondInput = parseFloat(result.innerText);

    if (firstInput === `0` || firstInput === 0) {
        return result.innerText = `0`;

    }

    if (sumClickButton || subtractClickButton) {

        let sumDec = (firstInput * secondInput) / 100;
        return result.innerText = sumDec.toString();
    }

    if (multiplyClickButton || divideClickButton) {

        let sumDec = secondInput / 100;
        return result.innerText = sumDec.toString();
    }


    let sumDec = (firstInput * secondInput) / 100;
    return result.innerText = sumDec.toString();

}, false);


equal.addEventListener(`click`, function () {

    secondInput = parseFloat(result.innerText);

    if (sumClickButton) {
        let sumDec = firstInput + secondInput;
        console.log(sumDec);
        return result.innerText = sumDec.toString();
    }

    if (subtractClickButton) {
        return result.innerText = parseFloat(firstInput - secondInput);
    }

    if (multiplyClickButton) {
        return result.innerText = parseFloat(firstInput * secondInput);
    }


    if (divideClickButton) {

        if (secondInput === `` || secondInput === 0) {
            return result.innerText = `error`
        }
        return result.innerText = parseFloat(firstInput / secondInput);
    }

}, false);

