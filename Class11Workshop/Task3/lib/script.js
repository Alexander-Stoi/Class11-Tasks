

$(document).ready(function () {

    let currentBalance = 2000;

    let deposit = $(`#deposit`);
    let withdraw = $(`#withdraw`);

    let btnDeposit = $(`#btnDeposit`);
    let btnWithdraw = $(`#btnWithdraw`);
    let btnBalance = $(`#btnBalance`);
    let btnExit = $(`#exit`);

    let h1Tag = $(`h1`);

    btnDeposit.click(function () {

        currentBalance += parseInt(deposit.val());

        alert(`You have ${currentBalance} on your account`);

        deposit.val(``);

    })


    btnWithdraw.click(function () {

        currentBalance -= parseInt(withdraw.val());

        alert(`You have ${currentBalance} on your account`);

        withdraw.val(``);

    })


    btnBalance.click(function () {

        h1Tag.text(`You have: ${currentBalance} on your account`);

    })



    btnExit.click(function () {

        location.reload();

    })

    console.log(currentBalance);


})