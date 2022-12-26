import throttle from 'lodash.throttle';


const STORAGE_KEY = `feedback-form-state`;

const formData = {};

const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form textarea`),
    }

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, throttle(onTextareaInput, 500));

populateTextarea();

refs.form.addEventListener(`input`, e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);

    localStorage.setItem(`formData`, JSON.stringify(formData));
    
    if (localStorage.getItem(`STORAGE_KEY`)) {
    formData = JSON.parse(localStorage.getItem(`STORAGE_KEY`));
}
})



function onTextareaInput (evt) {
    const massage = evt.target.value;

    localStorage.setItem(STORAGE_KEY, massage);
}



function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea(evt) {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        console.log(saveMessage);
        refs.textarea.value = saveMessage;
    }
}
