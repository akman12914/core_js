import data from "./data/data.js";
import { getNode as $, getRandom, insertLast, clearContents } from "./lib/index.js";

const submit = $("#submit");
const nameField = $("#nameField");
const result = $(".result");

console.log(data("경준오"));

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  clearContents(result);

  insertLast(result, pick);
}
submit.addEventListener("click", handleSubmit);
