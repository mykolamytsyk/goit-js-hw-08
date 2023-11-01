import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = {};

function onInputData(event) {
  dataForm[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

reloadPage();

function reloadPage() {
  try {
    const savedData = localStorage.getItem(Key);
    if (!savedData) return;
    dataForm = JSON.parse(savedData);
    Object.entries(dataForm).forEach(([key, val]) => {});
  } catch ({ message }) {
    console.log(message);
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(dataForm);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
