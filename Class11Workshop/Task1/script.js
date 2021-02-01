
let inputUserNumber = prompt(`Enter numbers`);


function acceptNum(num) {

    let resultArr = ``;

    for (i = 0; i < num.length; i++) {

        console.log(i);
        if (i == num.lenght) {
            resultArr += num.charAt(i);
            return;
        }

        if ((parseInt(num.charAt(i)) % 2 === 0) && (parseInt(num.charAt(i + 1)) % 2 === 0)) {
            resultArr += num.charAt(i) + `-`;
        } else {
            resultArr += num.charAt(i);
        }

    }
    return resultArr;

}

console.log(acceptNum(inputUserNumber));


