function findWeek() {
    let data = form1.querySelectorAll("input");
    let thisDate = new Date(data[0].value, data[1].value - 1, data[2].value, data[3].value)
    // let str = data[0].value + "-0" + data[1].value + "-" + data[2].value + "T" + data[3].value + ":00:00.000";
    // let nowDate = Date.parse(str);
    let nowDate = thisDate.getTime();
    let nullDate = Date.parse(data[0].value);
    let dif = nowDate - nullDate;
    let weeks = dif / (7 * 24 * 3600 * 1000);
    data[5].value = Math.ceil(weeks);
}

function findZodiacSign() {
    let data = form2.querySelectorAll("input");
    let thisDate = new Date(data[0].value, data[1].value - 1, data[2].value);
    let month = Number(thisDate.getMonth() + 1);
    let date = Number(thisDate.getDate());
    if (month == 1 && date >= 20 || month == 2 && date <= 18) data[4].value = "Водолей";
    else if (month == 2 && date >= 19 || month == 3 && date <= 20) data[4].value = "Рыбы";
    else if (month == 3 && date >= 21 || month == 4 && date <= 19) data[4].value = "Овен";
    else if (month == 4 && date >= 20 || month == 5 && date <= 20) data[4].value = "Телец";
    else if (month == 5 && date >= 21 || month == 6 && date <= 21) data[4].value = "Близнецы";
    else if (month == 6 && date >= 22 || month == 7 && date <= 22) data[4].value = "Рак";
    else if (month == 7 && date >= 23 || month == 8 && date <= 22) data[4].value = "Лев";
    else if (month == 8 && date >= 23 || month == 9 && date <= 22) data[4].value = "Дева";
    else if (month == 9 && date >= 23 || month == 10 && date <= 22) data[4].value = "Весы";
    else if (month == 10 && date >= 23 || month == 11 && date <= 21) data[4].value = "Скорпион";
    else if (month == 11 && date >= 22 || month == 12 && date <= 21) data[4].value = "Стрелец";
    else if (month == 12 && date >= 22 || month == 1 && date <= 19) data[4].value = "Козерог";
}

function eastCalendar() {
    let data = form3.querySelectorAll("input");
    let nullDate = new Date(1984, 0, 1);
    let nowDate = new Date(data[0].value, data[1].value - 1, data[2].value);
    let difYear = Number(nowDate.getFullYear() - nullDate.getFullYear() + 1);
    let color = Math.ceil(difYear / 12);
    while (color > 5) 
    {
        color -= 5;
    }
    let animal = difYear % 12;
    let strColor;
    switch (color) {
        case 1:
            strColor = "green";
            break;
        case 2:
            strColor = "red";
            break;
        case 3:
            strColor = "yellow";
            break;
        case 4:
            strColor = "white";
            break;
        case 5:
            strColor = "black";
            break;
    }
    let strAnimal;
    switch (animal) {
        case 1:
            strAnimal = "rat";
            break;
        case 2:
            strAnimal = "cow";
            break;
        case 3:
            strAnimal = "tiger";
            break;
        case 4:
            strAnimal = "hare";
            break;
        case 5:
            strAnimal = "dragon";
            break;
        case 6:
            strAnimal = "snake";
            break;
        case 7:
            strAnimal = "horse";
            break;
        case 8:
            strAnimal = "ship";
            break;
        case 9:
            strAnimal = "monkey";
            break;
        case 10:
            strAnimal = "chicken";
            break;
        case 11:
            strAnimal = "dog";
            break;
        case 0:
            strAnimal = "pig";
            break;
    }
    form3.querySelector("[name='eastSign']").value = strColor +  " " + strAnimal;
}