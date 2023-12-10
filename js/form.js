const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("mess");

function sendEmail() {
  const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}<br>`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ryzvaniuk202@gmail.com",
    Password: "9E8BC6CA63A68F3169D2A171AE6593F066D6",
    To: "ryzvaniuk202@gmail.com",
    From: "ryzvaniuk202@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
