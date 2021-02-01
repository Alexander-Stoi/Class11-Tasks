function divisFunc() {
    let divisibleNum = [];

    for (i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 7 === 0) {
            divisibleNum.push(i);
        }

    }
    return divisibleNum;
}

console.log(divisFunc());