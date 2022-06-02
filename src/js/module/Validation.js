const form = document.querySelector(".js-form");
const loading = document.querySelectorAll(".loading");
const closeModal = document.getElementById("myModal");
const inputName = document.querySelector(".js-input-name");
const inputEmail = document.querySelector(".js-input-email");
const inputCheckbox = document.querySelectorAll(".js-input-checkbox");
const nameErrorText = document.querySelector(".modal__input-name-error");
const emailErrorText = document.querySelector(".modal__input-email-error");
const checkboxErrorText = document.querySelector(
  ".modal__input-checkbox-error"
);

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addTextContentFunc(element, content) {
  return (element.textContent = content);
}
function addClassFunc(element, className) {
  return element.classList.add(className);
}
function removeClassFunc(element, className) {
  return element.classList.remove(className);
}


const nameValidateFunc = () => {
  if (inputName.value.trim().length == 0) {
    addTextContentFunc(nameErrorText, "this field is reqiured*");
    addClassFunc(inputName, "modal__input-error");
    return false;
  } else {
    addTextContentFunc(nameErrorText, null);
    removeClassFunc(inputName, "modal__input-error");
  }

  if (inputName.value.trim().length < 3) {
    addTextContentFunc(nameErrorText, "should be more then 3 symbols");
    addClassFunc(inputName, "modal__input-error");
    return false;
  } else {
    addTextContentFunc(nameErrorText, null);
    removeClassFunc(inputName, "modal__input-error");
    return true;
  }
};

const emailValidateFunc = () => {
  const emailVal = inputEmail.value;

  if (inputEmail.value.trim().length == 0) {
    addTextContentFunc(emailErrorText, "this field is reqiured*");
    addClassFunc(inputEmail, "modal__input-error");
    return false;
  } else {
    addTextContentFunc(emailErrorText, null);
    removeClassFunc(inputEmail, "modal__input-error");
  }

  if (validateEmail(emailVal)) {
    addTextContentFunc(emailErrorText, null);
    removeClassFunc(inputEmail, "modal__input-error");

    return true;
  } else {
    addTextContentFunc(emailErrorText, "e-mail not valid*");
    addClassFunc(inputEmail, "modal__input-error");
    return false;
  }
};

const checkboxValidateFunc = () => {
  const checkbox = Array.from(inputCheckbox).filter((item) => item.checked);

  if (checkbox.length > 0) {
    addTextContentFunc(checkboxErrorText, null);

    return true;
  } else {
    addTextContentFunc(checkboxErrorText, "select at least one option*");

    return false;
  }
};

export function Validation() {
  form.onsubmit = function (event) {
    event.preventDefault();
    const nameValidate = nameValidateFunc();
    const emailValidate = emailValidateFunc();
    const checkboxValidate = checkboxValidateFunc();

    if (!!nameValidate && !!emailValidate && !!checkboxValidate) {
      loading[0].classList.add("modal__loading-sandglass");
      loading[1].classList.add("modal__loading-text");

      setTimeout(() => {
        clearForm();
      }, 2000);
      return true;
    } else {
      return false;
    }
  };
}

export function clearForm() {
  document.body.classList.remove("overflow-h");
  closeModal.style.display = "none";
  inputName.value = null;
  inputEmail.value = null;
  loading[0].classList.remove("modal__loading-sandglass");
  loading[1].classList.remove("modal__loading-text");
  inputEmail.classList.remove("modal__input-error");
  inputName.classList.remove("modal__input-error");
  emailErrorText.textContent = "";
  nameErrorText.textContent = "";
  checkboxErrorText.textContent = "";
  inputCheckbox.forEach((item) => {
    item.checked = false;
  });
}
