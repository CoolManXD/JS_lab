function setColorCell(cell) {
    // cell.style.backgroundColor = cell.value;
    cell.parentElement.style.backgroundColor = cell.value;
}

function setBgTable(bg) {
    let tbl = document.getElementById('mainTable');
    if (bg.value == "image.jpg")
    {
        resetColorCell()
        tbl.style.backgroundColor = "";
        tbl.style.backgroundImage = "url(" + bg.value +")";
    }
    else
    {
        resetColorCell()
        tbl.style.backgroundImage = "";
        tbl.style.backgroundColor = bg.value;
    }
}

function resetColorCell() {
    let cells = document.querySelectorAll("td");
    for (let cell of cells)
        cell.style.backgroundColor = "";
}

function countPrice(shop) {
    let price = shop.querySelector("[name='price']");
    let quantity = shop.querySelector("[name='quantity']");
    let receipt = shop.querySelector("[name='receipt']");
    receipt.value = price.value*quantity.value;
}