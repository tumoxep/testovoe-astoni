const form = document.querySelector(".contact-form__form");

function formSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append(
    'firstName',
    document.querySelector('input[name="name"]').value,
  );
  formData.append(
    'lastName',
    document.querySelector('input[name="last-name"]').value,
  );
  formData.append(
    'message',
    document.querySelector('textarea[name="message"]').value,
  );

  fetch(
    "https://nocodeform.io/f/6463cbc5da2e332c434d81ac",
    {
      method: "POST",
      body: formData,
    },
  )
  .then(response => alert('Спасибо. Мы скоро свяжемся с вами'))
  .catch(error => console.log(error));
}

form.addEventListener("submit", formSubmit);
