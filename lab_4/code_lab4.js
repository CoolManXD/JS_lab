function insertPicture(n) {
    if (n < 1 || n > 3) alert("1 <= number of picture <= 3")
    else {
        let gallery = document.getElementById("gallery");
        let BR = document.createElement("br");
        let newImg = document.createElement("img");
        newImg.src = "ball" + n + ".jpg";
        gallery.appendChild(BR);
        gallery.appendChild(newImg);
    }
}

function resizePicture(str, event) {
    let pict = document.getElementById(str);
    if (event) {
        pict.width = 320;
        pict.height = 360;
    }
    else {
        pict.width = 160;
        pict.height = 180;
    }
} 

function setArrow(str, event) {
    let arrow = document.getElementById(str);
    if (event) {
        let newArrow = document.createElement("img");
        newArrow.src = "arrow.png";
        arrow.appendChild(newArrow);
    }
    else {
        arrow.removeChild(arrow.firstChild);
    }
}