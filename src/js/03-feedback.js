// try {
//   const currentFeedback = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );
//   inputEmail.value = currentFeedback.email ? currentFeedback.email : '';
//   message.value = currentFeedback.message
//     ? currentFeedback.message
//     : '';
// } catch (error) {
//   console.log(error.message);
// }

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const feedback = {};

form.addEventListener('input', throttle(getInputValues, 300));
form.addEventListener('submit', handleSubmit);

try {
  const currentFeedback = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  inputEmail.value = currentFeedback.email ? currentFeedback.email : '';
  message.value = currentFeedback.message ? currentFeedback.message : '';
} catch(error){
  console.log(error.message);
}

function getInputValues(e) {
  feedback[`${e.target.name}`] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}
function handleSubmit(e) {
  e.preventDefault();
  try {
    console.log(JSON.parse(localStorage.getItem('feedback-from-state')));
  } catch (error) {
    console.log(error.message);
  }

  form.reset();
  localStorage.removeItem('feedback-from-state');
}
