function changeHR(str, val) {
    let HRR = document.getElementById("unic");
    if (str == "size") {
        HRR.style.borderWidth = val + "px";
    } else if (str == "style") {
        HRR.style.borderStyle = val;
    } else if (str == "pos") {
        HRR.style.marginTop = val + "px";
    }
}

function fillProfile(answers, profile) {
    for (let i=0; i<2; i++)
    {
        if(answers[i].checked)
        {
            profile[0].value = answers[i].value;
            break;
        }
    }
    profile[1].value = answers[2].value;
    for (let i=3; i<5; i++)
    {
        if(answers[i].checked)
        {
            profile[2].value = answers[i].value;
            break;
        }
    }
}