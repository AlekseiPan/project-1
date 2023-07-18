const buttonContacts = document.querySelector(".button-contacts");
const letterPopup = document.querySelector(".model");
const letterClose = letterPopup.querySelector(".model-cross");
const letterForm = letterPopup.querySelector(".approach-form");
const letterName = letterPopup.querySelector(".approach-form-name");
const letterEmail = letterPopup.querySelector(".approach-form-email");
const letterText = letterPopup.querySelector(".approach-form-letter");

let isStorageSupport_1 = true;
let storage_1 = "";

try {
  storage_1 = localStorage.getItem("name");
} catch (err) {
  isStorageSupport_1 = false;
}

let isStorageSupport_2 = true;
let storage_2 = "";

try {
  storage_2 = localStorage.getItem("email");
} catch (err) {
  isStorageSupport_2 = false;
}

buttonContacts.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("model-show");
  if (storage_1 && storage_2) {
    letterName.value = storage_1;
    letterEmail.value = storage_2;
  } else {
    letterName.focus();
  }
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("model-show");
  letterPopup.classList.remove("model-error");
});

letterForm.addEventListener("submit", function (evt) {
  if (!letterName.value || !letterEmail.value || !letterText.value) {
    evt.preventDefault();
    letterPopup.classList.remove("model-error");
    letterPopup.offsetWidth = letterPopup.offsetWidth;
    letterPopup.classList.add("model-error");
  } else {
    if (isStorageSupport_1 && isStorageSupport_2) {
      localStorage.setItem("name", letterName.value);
      localStorage.setItem("email", letterEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains("model-show")) {
      evt.preventDefault();
      letterPopup.classList.remove("model-show");
      letterPopup.classList.remove("model-error");
    }
  }
});
