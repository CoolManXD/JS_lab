function calculateWords() {
    let str = form1.querySelector("[name='someText1']").value;
    let arr = str.split(' ');
    let quantity = 0;
    for (let value of arr)
        if (value != "") quantity++;
    // let quantity = arr.length;
    form1.querySelector("[name='quantityWords']").value = quantity;
}

function replaceWords() {
    let str = form2.querySelector("[name='someText2']").value;
    let oldWord = form2.querySelector("[name='oldWord']").value;
    let newWord = form2.querySelector("[name='newWord']").value;
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let word0 = arr[i];

        // if (word0.includes(oldWord))
        // {
        //     let word = "";
        //     for (let j=oldWord.length; j < word0.length; j++)
        //     {
        //         word += word0[j];
        //     }
        //     arr[i] = newWord+word;
        // }
        if (word0.includes(oldWord) && !(word0.length > oldWord.length + 1)) {
            if (newWord.length == word0.length)
                arr[i] = newWord;
            else
                arr[i] = newWord + word0[word0.length - 1];
        }
    }
    str = arr.join(' ');
    form2.querySelector("[name='newText']").value = str;
}

function deleteSpaces() {
    let data = form3.querySelectorAll("textarea");
    let str = data[0].value;
    let newStr = "";
    let from = 0;
    while (true) {
        let to = str.indexOf(" ", from);
        if (to == -1) break;
        if (to != from)
            newStr += str.slice(from, to) + " ";
        from = to + 1;
    }
    newStr += str.slice(from);
    data[1].value = newStr;
}