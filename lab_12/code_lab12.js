function setFocus(i) {
    profile.querySelectorAll("input")[+i].focus();
    profile.querySelectorAll("input")[+i].select();
}

function validate() {
    let data = profile.querySelectorAll("input");
    let strName = data[0].value;
    if (!checkName(strName)) return false;
    let strMail = data[1].value;
    if (!checkMail(strMail)) return false;
    let strPhone = data[2].value;
    if (!checkPhone(strPhone)) return false;
    alert("Everything is correct!");
    return true;
}

function checkName(strName) {
    let pos = 0;
    while (true) {
        if (strName[pos] != " ") break;
        pos++;
    }
    let str = strName.slice(pos, strName.indexOf(" ", pos));
    pos = strName.indexOf(" ", pos);
    for (let i = 0; i < str.length; i++) {
        if (!(str[i].match(/[a-z]/i))) {
            alert("Incorrect last name");
            return false;
        }
    }

    while (true) {
        pos++;
        if (strName[pos] != " ") break;
    }
    str = strName.slice(pos, pos + 4);
    pos += 4;
    if (!(str[0].match(/[a-z]/i)) || !(str[2].match(/[a-z]/i)) || str[1] != '.' || str[3] != '.') {
        alert("Incorrect initials")
        return false;
    }
    for (let i = pos; i < strName.length; i++) {
        if (strName[i] != " ") {
            alert("Incorrect name. Extra words");
            return false;
        }
    }
    return true;
}

function checkMail(strMail) {
    let pos = 0;
    while (true) {
        if (strMail[pos] != " ") break;
        pos++;
    }
    strMail += " ";
    let str = strMail.slice(pos, strMail.indexOf(" ", pos));
    pos = strMail.indexOf(" ", pos);
    let strGmail = str.slice(-10);
    if (strGmail != "@gmail.com") {
        alert("Incorrect end of E-mail (@gmail.com)");
        return false;
    }
    for (let i = pos; i < strMail.length; i++) {
        if (strMail[i] != " ") {
            alert("Incorrect E-mail. Extra words");
            return false;
        }
    }
    return true;
}

function checkPhone(strPhone) {
    let pos = 0;
    while (true) {
        if (strPhone[pos] != " ") break;
        pos++;
    }
    strPhone += " ";
    let str = strPhone.slice(pos, strPhone.indexOf(" ", pos));
    pos = strPhone.indexOf(" ", pos);
    if (str.length != 10) {
        alert("Invalid quantity of digits in phone number");
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (!(str[i].match(/[0-9]/))) {
            alert("Incorrect phone number. There're letters or symbols");
            return false;
        }
    }
    for (let i = pos; i < strPhone.length; i++) {
        if (strPhone[i] != " ") {
            alert("Incorrect E-mail. Extra words");
            return false;
        }
    }
    return true;
}