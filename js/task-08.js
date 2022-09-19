const form = document.querySelector('.login-form');
let account = {};

form.addEventListener('submit', onSubmitCheckInputValidation);

function onSubmitCheckInputValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Заполнены не все поля!');
  }

  account.email = email.value;
  account.password = password.value;
  console.log(account);

  event.currentTarget.reset();
}
