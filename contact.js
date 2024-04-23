async function handleFormSubmit(event) {
  event.preventDefault();

  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const name = document.querySelector("#name");
  const surname = document.querySelector("#sname");

  const isNameEmpty = name.value.trim() !== "";
  const isSurnameEmpty = surname.value.trim() !== "";

  const isEmailValid = email.value.trim() !== "" && email.validity.valid;

  const isMessageValid = message.value.trim() !== "";

  const isFormValid =
    isEmailValid && isMessageValid && isNameEmpty && isSurnameEmpty;

  if (isFormValid) {
    const formData = new FormData(event.target);

    const res = await fetch("https://formspree.io/f/mvoedvvk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();
    if (data.ok) {
      alert("Email successfully sent");
    }
  } else {
    if (name.value.trim() === "") {
      const name_span = document.querySelector("#name + span.error");

      name_span.innerText = "Name cannot be empty";
    }
    if (surname.value.trim() === "") {
      const surname_span = document.querySelector("#sname + span.error");

      surname_span.innerText = "Surname cannot be empty";
    }
    if (isEmailValid !== true) {
      const email_span = document.querySelector("#email + span.error");

      email_span.innerText = "Email is not valid";
    }
    if (isMessageValid !== true) {
      const message_span = document.querySelector("#message + span.error");

      message_span.innerText = "Message is not valid";
    }
  }
}
