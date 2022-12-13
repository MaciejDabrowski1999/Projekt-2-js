const inputValue = document.querySelector("#inputValue");
const currency = document.querySelector("#currency");
const countsButton = document.querySelector("#countsButton");
const result = document.querySelector("#result");
const eurBtn = document.querySelector("#eur");
const usdBtn = document.querySelector("#usd");
const chfBtn = document.querySelector("#chf");

const url = "https://api.nbp.pl/api/exchangerates/rates/a/";

const currencyTable = ["EUR", "USD", "CHF"];

currencyTable.forEach((element) => {
  const opt = document.createElement("option");
  opt.setAttribute("class", "inputStyle");
  opt.value = element;
  opt.innerHTML = element;
  currency.appendChild(opt);
});

const value = (rates) => {
  const valueCurrency = rates[0].mid;
  const sum = valueCurrency * inputValue.value;
  if (sum < 0) {
    inputValue.value = "Błąd wartości";
  } else {
    result.innerHTML = sum.toFixed(2);
  }
};

countsButton.addEventListener("click", () => {
  const valueOption = currency.value;
  fetch(url + valueOption)
    .then((response) => response.json())
    .then((data) => value(data.rates))
    .catch((err) => console.error(err));
});
eurBtn.addEventListener("click", () => {
  currency.value = currencyTable[0];
});
usdBtn.addEventListener("click", () => {
  currency.value = currencyTable[1];
});
chfBtn.addEventListener("click", () => {
  currency.value = currencyTable[2];
});
