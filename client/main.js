import data from "./data/data.js";
import { getNode as $, getRandom, addClass, removeClass, insertLast, clearContents, showAlert, isNumericString, shake, copy } from "./lib/index.js";

const submit = $("#submit");
const nameField = $("#nameField");
const result = $(".result");
console.log(data("경준오"));

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(" ", "") === "") {
    // console.error("올바른 양식의 이름을 입력하세요");
    // alert("올바른 양식의 이름을 입력하세요");
    showAlert(".alert-error", "공백은 허용하지 않습니다.", 500);
    // addClass(nameField, "shake");
    shake(nameField);

    return;
  }

  if (isNumericString(name) === false) {
    showAlert(".alert-error", "제대로 된 이름을 입력하세요", 500);
    shake(nameField);
    return;
  }

  clearContents(result);

  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사 완료@");
  });
}
submit.addEventListener("click", handleSubmit);
result.addEventListener("click", handleCopy);
