import { dataFromServerFunc } from "../../api/api.js";

const price = document.getElementsByClassName("pricing__price");
const plan = document.getElementsByClassName("pricing__plans");
const modalPlans = document.getElementsByClassName("radio-btn__plans");

const dataFromServer = await dataFromServerFunc();
const dataPlans = dataFromServer.plans;

function upperCaseFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

export function Plans() {
  for (let i = 0; i < dataPlans.length; i++) {
    price[i].textContent = dataPlans[i].price;
    plan[i].textContent = upperCaseFirst(dataPlans[i].name);
    modalPlans[i].textContent = upperCaseFirst(dataPlans[i].name);
  }
}
