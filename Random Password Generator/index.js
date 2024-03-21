function generatePassword() {
    const passLength = Number(document.getElementById("passLength").value);
    const incLower = document.getElementById("lower").checked;
    const incUpper = document.getElementById("upper").checked;
    const incNums = document.getElementById("numbers").checked;
    const incSym = document.getElementById("symbols").checked;

    const password = generatePass(passLength, incLower, incUpper, incNums, incSym);

    let result = document.getElementById("result");
    result.innerHTML = `Generated Password: <br>${password}`;

    if (passLength<=0){
        result.textContent = "Password length must be 1 or more."
    }

    if(!incLower && !incUpper && !incNums && !incSym){
        result.textContent = "You must check one or more boxes."
    }
}

function generatePass(length, incLower, incUpper, incNums, incSym) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()-_=+";

    let allowedChars = "";
    let password = "";

    allowedChars += incLower ? lowercaseChars : "";
    allowedChars += incUpper ? uppercaseChars : "";
    allowedChars += incNums ? numberChars : "";
    allowedChars += incSym ? symbolChars : "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

document.body.addEventListener("keydown", ev =>{
    if(ev.key=="Enter"){
        generatePassword();
    }
});