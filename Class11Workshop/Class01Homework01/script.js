let Admin = {
    username: `Aleksandar`,
    password: `Stojanov#`,
    isAdmin: true,
}

let users = [];

let usernameRegister = document.getElementById(`usernameRegister`);
let passwordRegister = document.getElementById(`passwordRegister`);
let registerBtn = document.getElementById(`registerBtn`);

let usernameLogin = document.getElementById(`usernameLogin`);
let passwordLogin = document.getElementById(`passwordLogin`);
let loginBtn = document.getElementById(`loginBtn`);

let h3Greeting = document.getElementById(`greeting`);
let logoutBtn = document.getElementById(`logOut`);
let showUsers = document.getElementById(`test`);


function RegisterNewUser(username, password) {
    this.username = username;
    this.password = password;
    this.isAdmin = false;
};


let Stanko = new RegisterNewUser(`Stanko`, `Stanko#`);
let Jelena = new RegisterNewUser(`Jelena`, `Jelena#`);
let Nikola = new RegisterNewUser(`Nikola`, `Nikola#`);
let Natasha = new RegisterNewUser(`Natasha`, `Natasha#`);
let Gligor = new RegisterNewUser(`Gligor`, `Gligor#`);

users.push(Admin, Stanko, Jelena, Nikola, Natasha, Gligor);
console.log(users);

let formDiv = document.getElementById("displayDIV");

registerBtn.addEventListener(`click`, function () {

    let usernameRegisterValue = usernameRegister.value;
    let passwordRegisterValue = passwordRegister.value;
    showUsers.innerText = ``;

    if (loginAndRegisterValidation(usernameRegisterValue, passwordRegisterValue)) {
        h3Greeting.innerText = `Invalid input
        Username needs to include more than 3 characters
        Username can't contain special character
        Password has to be longer than 6 characters
        Password must contain minimum 1 special character`

    } else if (checkUser(usernameRegisterValue)) {
        h3Greeting.innerText = ` Username taken, login if you already have account or try different username`
    } else {

        let newUser = new RegisterNewUser(usernameRegisterValue, passwordRegisterValue);
        users.push(newUser);
        console.log(users);
        createTableWithUsernames(users);
    }

    usernameRegister.value = ``;
    passwordRegister.value = ``;

}, false);


var checkIfUserIsAdmin = ``;

loginBtn.addEventListener(`click`, function () {
    h3Greeting.innerText = ``;
    let usernameLoginValue = usernameLogin.value;
    let passwordLoginValue = passwordLogin.value;

    if (checkUser(usernameLoginValue) && checkPassword(passwordLoginValue)) {

        let h2Greet = document.createElement(`h2`);
        h2Greet.setAttribute(`id`, `h2Greet`);
        document.body.appendChild(h2Greet).innerText = `Welcome ${usernameLoginValue} to our awesome app`;
        checkIfUserIsAdmin = usernameLoginValue;

        if (checkIsAdmin(usernameLoginValue)) {
            createTable(users);
        }

    } else {

        h3Greeting.innerText = `Wrong username or password. Try Again`;
    }
    formDiv.style.display = 'none';
    logoutBtn.style.display = 'block';

}, false);

logoutBtn.addEventListener(`click`, function () {
    formDiv.style.display = 'block';
    logoutBtn.style.display = 'none';
    h3Greeting.style.display = `none`;
    showUsers.style.display = `none`;
    usernameLoginValue = ``;
    passwordLoginValue = ``;

});

function checkIsAdmin(username) {
    for (let user of users) {

        if (username === user.username && user.isAdmin) {
            return true;
        }
    }
    return false;
}

function checkUser(username) {
    for (let user of users) {

        if (username === user.username) {
            return true;
        }
    }
    return false;
}

function checkPassword(password) {
    for (let user of users) {

        if (password === user.password) {
            return true;
        }
    }
    return false;
}

function loginAndRegisterValidation(username, password) {

    if (!isLetters(username) || username === `` || username === NaN || username.length < 4 || password.length < 7 || isLetters(password)) {
        return true;
    } else {
        return false;
    }

}

function isLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}


function createTable(users) {

    showUsers.style.border = `solid`;

    let header = document.createElement(`tr`);
    showUsers.appendChild(header);

    let thead = document.createElement(`th`);
    header.appendChild(thead);
    thead.innerText = `Username`;

    let theadP = document.createElement(`th`);
    header.appendChild(theadP);
    theadP.innerText = `Password`;


    for (let i = 0; i < users.length; i++) {

        let numRow = document.createElement(`tr`);
        showUsers.appendChild(numRow)

        for (let j = 1; j <= 2; j++) {

            let numCol = document.createElement(`td`);

            if (j === 1) {

                numRow.appendChild(numCol);
                numCol.innerText = users[i].username;
            }

            if (j === 2) {
                numRow.appendChild(numCol);
                numCol.innerText = users[i].password;
            }

        }

    }
}

function createTableWithUsernames(users) {

    let header = document.createElement(`tr`);
    showUsers.appendChild(header);

    let thead = document.createElement(`th`);
    header.appendChild(thead);
    thead.innerText = `Username`;

    for (let i = 0; i < users.length; i++) {

        let numRow = document.createElement(`tr`);
        showUsers.appendChild(numRow)
        let numCol = document.createElement(`td`);
        numRow.appendChild(numCol);
        numCol.innerText = users[i].username;

    }
}




