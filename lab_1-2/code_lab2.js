function square(a, h) {
    var s = (a * h) / 2;
    document.write("Площа прямокутного трикутника = ", s);
    return s
}

function square_rec(obj) {
    obj.res.value = obj.num1.value * obj.num1.value;
}

function geron(obj) {
    let side1 = Math.sqrt((obj.x1.value - obj.x2.value) ** 2 + (obj.y1.value - obj.y2.value) ** 2);
    let side2 = Math.sqrt((obj.x1.value - obj.x3.value) ** 2 + (obj.y1.value - obj.y3.value) ** 2);
    let side3 = Math.sqrt((obj.x3.value - obj.x2.value) ** 2 + (obj.y3.value - obj.y2.value) ** 2);
    let p = (side1 + side2 + side3) / 2;
    obj.res.value = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
}

function distance(obj) {
    
    obj.res.value = Math.sqrt(Number(obj.x.value) ** 2 + Number(obj.y.value) ** 2);
}

function exchange(obj) {
    let temp = obj.number1.value;
    obj.number1.value = obj.number2.value;
    obj.number2.value = temp;
}