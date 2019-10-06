let pctr = -1;

function load() {
    img_array = new Array()
    for (var i = 0; i < 3; i++)
        img_array[i] = new Image(50, 100)
    img_array[0].src = "ball1.jpg"
    img_array[1].src = "ball2.jpg"
    img_array[2].src = "ball3.jpg"
}

function animation() {
    pctr = pctr + 1
    document.images[0].src = img_array[pctr].src
    switch (pctr) {
        case 0: document.querySelector("div").style.justifyContent = "flex-start"; break;
        case 1: document.querySelector("div").style.justifyContent = "center"; break;
        case 2: document.querySelector("div").style.justifyContent = "flex-end"; break;
    }
    setTimeout("animation()", 500)
    if (pctr == 2) pctr = -1
}

function countPositive() {
    let str = form1.querySelector("textarea").value;
    let arr = str.split(" ");
    let quantity = 0;
    for (let value of arr) 
        if (+value > 0) quantity++;
    form1.querySelector("[name='quantity']").value = quantity;
}

function searchMax() {
    let str = form2.querySelector("textarea").value;
    let arr = str.split(" ");
    let max = +arr[0];
    for (let value of arr) 
        if (+value > max) max = +value;
    form2.querySelector("[name='max']").value = max;
}