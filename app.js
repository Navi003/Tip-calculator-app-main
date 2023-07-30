"use strict";

const billEl = document.getElementById("bill");
const pplEl = document.getElementById("input-number-of-ppl");
const selectfromEl = document.querySelector(".select-from");
const tipAmountPerpersonEl = document.getElementById("tip-amount-perperson");
const totalAmountPerperson = document.getElementById("total-amount-perperson");
const resetBtn = document.querySelector(".reset");
const validNum = document.querySelector(".valid-num");

const fix = (val) => parseFloat(val).toFixed(2);
const addBoder = (data) => data.classList.add("border");

const state = {
  billvalue: 0,
  pplvalue: 0,
};

selectfromEl.addEventListener("click", function (e) {
  e.preventDefault();

  state.pplvalue = pplEl.value;
  state.billvalue = billEl.value;

  let dataValue = state.pplvalue === "0" ? "Zero" : "Empty";

  if (pplEl.value === "") {
    validNum.innerText = `Cant be a ${dataValue}`;
    validNum.classList.remove("hidden");
    addBoder(pplEl);
    return;
  }

  if (pplEl.value === "0") {
    validNum.innerText = `Cant be a ${dataValue}`;
    validNum.classList.remove("hidden");
    addBoder(pplEl);
    return;
  }
  if (Number(pplEl.value) < 0) {
    validNum.innerText = `Enter a Valid Number`;
    validNum.classList.remove("hidden");
    addBoder(pplEl);
    return;
  }

  if (e.target.classList.contains("select")) {
    validNum.classList.add("hidden");
    pplEl.classList.remove("border");
    const tipProzent = Number(e.target.innerText.replace("%", ""));

    const tipprozentV = (tipProzent * state.billvalue) / 100;
    const totalValue = state.billvalue / state.pplvalue;

    tipAmountPerpersonEl.innerText = fix(tipprozentV);

    totalAmountPerperson.innerText = fix(tipprozentV + totalValue);
  }
});

resetBtn.addEventListener("click", function () {
  tipAmountPerpersonEl.innerText = "0.00";
  totalAmountPerperson.innerText = "0.00";
  billEl.value = "";
  pplEl.value = "";
  pplEl.classList.remove("border");
  validNum.classList.add("hidden");
});
