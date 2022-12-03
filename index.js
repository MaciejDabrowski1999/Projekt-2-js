const inputValue = document.querySelector("#inputValue");
const currency = document.querySelector("#currency");
const countsButton = document.querySelector("#countsButton");
const result = document.querySelector("#result");
const url = "http://api.nbp.pl/api/exchangerates/rates/a/";

const currencyTable = ["EUR", "USD", "CHF"];

currencyTable.forEach((element) => {
  let opt = document.createElement("option");
  opt.value = element;
  opt.innerHTML = element;
  currency.appendChild(opt);
});

const value = (rates) => {
  const valueCurrency = rates[0].mid;
  const sum = valueCurrency * inputValue.value;
  result.innerHTML = sum;
  console.log(sum);
};

countsButton.addEventListener("click", () => {
  let valueOption = currency.value;
  fetch(url + valueOption)
    .then((response) => response.json())
    .then((data) => value(data.rates))
    .catch((err) => console.error(err));
});
