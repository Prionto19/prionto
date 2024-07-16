(function () {
  emailjs.init("fAnZv2MzwFHKZ82Zv");
})();

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send("service_b86qqrm", "template_fgiygmi", templateParams).then(
    function (response) {
      document.getElementById("emailStatus").innerText =
        "Email sent successfully!";
      $("#emailToast").toast("show");
    },
    function (error) {
      document.getElementById("emailStatus").innerText =
        "Failed to send email. Please try again.";
      $("#emailToast").toast("show");
    }
  );
}

// (function() {
//   emailjs.init("fAnZv2MzwFHKZ82Zv"); // Replace with your Email.js user ID
// })();

// function sendEmail() {
//   var form = document.getElementById("contactForm");

//   if (form.checkValidity()) {
//     var templateParams = {
//       email: document.getElementById("email").value,
//       name: document.getElementById("name").value,
//       subject: document.getElementById("subject").value,
//       message: document.getElementById("message").value
//     };

//     emailjs.send("service_b86qqrm", "template_fgiygmi", templateParams)
//       .then(function(response) {
//         console.log("Email sent successfully:", response);
//         showSuccessToast();
//       }, function(error) {
//         console.error("Email sending failed:", error);
//         showErrorToast();
//       });
//   } else {
//     form.reportValidity();
//   }
// }

// function showSuccessToast() {
//   document.getElementById("emailStatus").innerText = "Email sent successfully!";
//   var toastElement = new bootstrap.Toast(document.getElementById('emailToast'));
//   toastElement.show();
// }

// function showErrorToast() {
//   document.getElementById("emailStatus").innerText = "Email sending failed. Please try again.";
//   var toastElement = new bootstrap.Toast(document.getElementById('emailToast'));
//   toastElement.show();
// }
