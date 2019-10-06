function calculate() {
    let checkboxes = document.querySelectorAll("[name='subject']");
    let sum = 0;
    for (let temp of checkboxes) 
    {
        if(temp.checked)
        {
            sum += Number(temp.value);
            temp = temp.nextElementSibling;
            for (let i=0; i<6; i++)
            {
                if(temp.checked) 
                    sum += Number(temp.value);
                temp = temp.nextElementSibling;
            }
        }
    }
    document.querySelector("[name='price']").value = sum + "$";
}