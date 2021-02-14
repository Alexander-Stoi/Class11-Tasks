let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
// let input = '1234';

function printNameOfTHeNumber(numberString) {
    if (numberString.length === 1) {
        return dg[numberString];
    } else if (numberString.length === 2) {
        return printNameOfTwoDigitsNumber(numberString);
    }
    return printNameOfNumWithMoreThanTwoDigits(numberString);
}

function printNameOfTwoDigitsNumber(number) {
    let firstDigit = number[0];
    let secondDigit = number[1];

    if (number >= 10 && number <= 19) {
        return tn[number % 10];
    } else if (secondDigit === '0') {
        return tw[firstDigit - 2]; //example twenty, thirty...
    }
    return tw[firstDigit - 2] + ' ' + dg[secondDigit];
}

function printNameOfNumWithMoreThanTwoDigits(number) {
    let nameNum = '';

    for (let i = 0; i < number.length; i++) {
        let lenOfNum = number.length - i;

        let digit = number[i];
        if (lenOfNum === 4) {
            // console.log('------', dg[digit]);
            nameNum += dg[digit] + ' thousand ';
        } else if (lenOfNum === 3) {
            if (digit === '0') {
                return (nameNum += ' ');
            } else {
                nameNum += dg[digit] + ' hundred ';
            }
        } else if (lenOfNum === 2) {
            if (digit === '0') {
                nameNum += '';
            } else {
                return nameNum + printNameOfTwoDigitsNumber(number.substr(-2));
            }
        } else if (lenOfNum === 1) {
            if (digit === '0') {
                nameNum += ' ';
            } else {
                nameNum += dg[digit];
            }
        }
    }
    return nameNum;
}
// let bla = '1234';
// console.log(bla.substr(-2));
console.log(printNameOfTHeNumber('2303'));
console.log(printNameOfTHeNumber(`12`));

let input = prompt(`Enter Number`);
alert(printNameOfTHeNumber(input));
