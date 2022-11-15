const inputValue = document.querySelector(".inputValue");
const currency = document.querySelector("#currency");
const countsButton = document.querySelector(".countsButton");
const result = document.querySelector(".result");
const url = "http://api.nbp.pl/api/exchangerates/rates/a/";

const currencyTable = ["EUR", "USD", "CHF"];

currencyTable.forEach((element) => {
  let opt = document.createElement("option");
  console.log(element);
  opt.value = element;
  opt.innerHTML = element;
  currency.appendChild(opt);
});
