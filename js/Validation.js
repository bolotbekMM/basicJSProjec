let form = document.querySelector(".js-form"),
  loading = document.querySelectorAll(".loading"),
  inputName = document.querySelector(".js-input-name"),
  inputEmail = document.querySelector(".js-input-email"),
  inputCheckbox = document.querySelectorAll(".js-input-checkbox"),
  nameErrorText = document.querySelector(".modal__input-nameError"),
  emailErrorText = document.querySelector(".modal__input-emailError"),
  checkboxErrorText = document.querySelector(".modal__input-checkboxError"),
  closeModal = document.getElementById("myModal");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
console.log(inputCheckbox, "iiiiiiiiiiiii");

const nameValidateFunc = () => {
  if (inputName.value.trim().length == 0) {
    nameErrorText.textContent = "this field is reqiured*";
    inputName.classList.add("modal__input-error");
    return false;
  } else {
    nameErrorText.textContent = "";
    inputName.classList.remove("modal__input-error");
  }

  if (inputName.value.trim().length < 3) {
    nameErrorText.textContent = "should be more then 3 symbols";
    inputName.classList.add("modal__input-error");
    return false;
  } else {
    nameErrorText.textContent = "";
    inputName.classList.remove("modal__input-error");
    return true;
  }
};

const emailValidateFunc = () => {
  const emailVal = inputEmail.value;

  if (inputEmail.value.trim().length == 0) {
    emailErrorText.textContent = "this field is reqiured*";
    inputEmail.classList.add("modal__input-error");
    return false;
  } else {
    emailErrorText.textContent = "";
    inputEmail.classList.remove("modal__input-error");
  }

  if (validateEmail(emailVal)) {
    emailErrorText.textContent = "";
    inputEmail.classList.remove("modal__input-error");
    return true;
  } else {
    emailErrorText.textContent = "e-mail not valid*";
    inputEmail.classList.add("modal__input-error");
    return false;
  }
};

const checkboxValidateFunc = () => {
  const checkbox = Array.from(inputCheckbox).filter((item) => item.checked);

  if (checkbox.length > 0) {
    checkboxErrorText.textContent = "";
    return true;
  } else {
    checkboxErrorText.textContent = "select at least one option*";
    return false;
  }
};

form.onsubmit = function (event) {
  event.preventDefault();
  const nameValidate = nameValidateFunc();
  const emailValidate = emailValidateFunc();
  const checkboxValidate = checkboxValidateFunc();

  if (!!nameValidate && !!emailValidate && !!checkboxValidate) {
    loading[0].classList.add("modal__loading-sandglass");
    loading[1].classList.add("modal__loading-text");

    setTimeout(() => {
      closeModal.style.display = "none";
      inputName.value = "";
      inputEmail.value = "";
      loading[0].classList.remove("modal__loading-sandglass");
      loading[1].classList.remove("modal__loading-text");
      inputCheckbox.forEach((item) => {
        item.checked = false;
      });
    }, 2000);
    return true;
  } else {
    return false;
  }
};
