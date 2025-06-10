(function () {
  emailjs.init("koMhKAwqBnhnl-vDt"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const spinner = document.getElementById("spinner");       // Spinner element
  const submitBtn = document.getElementById("submitBtn");   // Submit button

  // Show spinner and disable button
  spinner.classList.remove("hidden");
  submitBtn.disabled = true;

  emailjs.sendForm("service_22pyq7u", "template_o6oervg", this)
    .then(() => {
      showToast("Message sent successfully!", "success");
      this.reset(); // Clear the form
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      showToast("Failed to send message. Please try again later.", "error");
    })
    .finally(() => {
      // Hide spinner and enable button
      spinner.classList.add("hidden");
      submitBtn.disabled = false;
    });
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `fixed bottom-5 right-5 z-50 px-4 py-2 rounded shadow-md text-white text-sm transition-opacity duration-300 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;

  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0");
    setTimeout(() => toast.remove(), 300); // Clean up after fade
  }, 2000);
}
