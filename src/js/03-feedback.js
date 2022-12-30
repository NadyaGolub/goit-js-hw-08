import throttle  from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = `feedback-form-state`;

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);


lastFormInput(); 


function onInput(evt) {
  let inputSavedData = localStorage.getItem(STORAGE_KEY);
  inputSavedData = inputSavedData ? JSON.parse(inputSavedData) : {};
  inputSavedData[evt.target.name] = evt.target.value; 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputSavedData)); 
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(name, value));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function lastFormInput() {
  let inputSavedData = localStorage.getItem(STORAGE_KEY);
  if (inputSavedData) {
    inputSavedData = JSON.parse(inputSavedData);
    Object.entries(inputSavedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

