function reverseNumm(obj) {
  let numStr = obj[0].value;
  let num = "";
  // let numArr = [];
  // for (let char of numStr)
  //     numArr.unshift(char);

  // for (let i of numArr)
  //     num += i;

  for (let i = numStr.length - 1; i >= 0; i--)
    num += numStr[i];
  obj[1].value = num;
}

function luckyTickets() {
  let maxSumm = 27;
  let summs = new Array(+maxSumm + 1);
  for (let i = 0; i < maxSumm + 1; i++)
    summs[i] = 0;

  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
      for (let k = 0; k < 10; ++k) {
        ++summs[i + j + k];
      }
    }
  }
  let luckyTickets = 0;
  for (let i = 1; i <= maxSumm; ++i) {
    luckyTickets += summs[i] * summs[i];
  }
  document.querySelector("[name='tickets']").value = luckyTickets;
}

function calculateNumbers() {
  let num = document.querySelector("[name='divideNum']").value;
  let quantity = 0;
  for (let i = 1; i < num / 2; i++)
    if (num % i == 0)
      quantity++;
  quantity++;
  document.querySelector("[name='dividers']").value = quantity;
}