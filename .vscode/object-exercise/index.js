let allnumber = document.getElementById("xxo");
let orolt1 = "";
let operator1;

const result = (Number) => {
  allnumber.innerHTML = allnumber.innerHTML + Number;
};

const clearr = () => {
  allnumber.innerHTML = "";
};
const process = (operator) => {
  orolt1 = allnumber.innerHTML;
  operator1 = operator;
  allnumber.innerHTML = "";
};
const resulttentsu = () => {
  switch (operator1) {
    case "+":
      allnumber.innerHTML = Number(orolt1) + Number(allnumber.innerHTML);
      break;
    case "-":
      allnumber.innerHTML = Number(orolt1) - Number(allnumber.innerHTML);
      break;
    case "*":
      allnumber.innerHTML = Number(allnumber.innerHTML) * Number(orolt1);
      break;
    case "/":
      allnumber.innerHTML = Number(orolt1) / Number(allnumber.innerHTML);
      break;
  }
};
const solih = () => {
  allnumber.innerHTML = allnumber.innerHTML * -1;
};
const huwilah = () => {
  allnumber.innerHTML = allnumber.innerHTML / 100;
};
const tseg = () => {
  if (!allnumber.innerHTML.includes(".")) {
    if (allnumber.innerHTML == "") {
      allnumber.innerHTML += "0";
    }
    allnumber.innerHTML = allnumber.innerHTML + ".";
  }
};
