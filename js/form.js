const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("mess");

function sendEmail() {
  const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${mess.value}<br>`;

  Email.send({
    SecureToken: "ecefc249-90c6-4816-a535-93f19310e34f",
    To: "ryzvaniuk202@gmail.com",
    From: "ryzvaniuk202@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message sent succesffully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  e.target.reset();
});
