function maxNum(obj) {
    let arr = obj.getElementsByClassName('numbers');
    let len = arr.length;
    let data = [];
    
    
    for (let i = 0; i < len; i++) {
        data.push(arr[i].value);
    }
    let max = data[0];
    for (let i = 1; i < len; i++) {
        max = Math.max(data[i], max);
    }
    let quantity = 0;
    for (let i = 0; i < len; i++) {
        if (data[i] == max) quantity++;
    }
    obj.res.value = quantity;
}

function checkTriangle(obj) {
    let side1 = Number(obj.side1.value);
    let side2 = Number(obj.side2.value);
    let side3 = Number(obj.side3.value);
    let isTrue;
    if (side1+side2 <= side3) isTrue = false;
    else if (side1+side3 <= side2) isTrue = false;
    else if (side2+side3 <= side1) isTrue = false;
    else isTrue = true;
    if (isTrue) obj.res.value = "Yeap";
    else obj.res.value = "No";
}

function defineQuater(obj) {
    let x = Number(obj.x.value);
    let y = Number(obj.y.value);
    if (x > 0 && y > 0) obj.res.value = "I";
    else if (x < 0 && y > 0) obj.res.value = "II";
    else if (x < 0 && y < 0) obj.res.value = "III";
    else if (x > 0 && y < 0) obj.res.value = "IV";
    else obj.res.value = "origin";
}