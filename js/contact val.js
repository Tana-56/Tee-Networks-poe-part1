document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form from submitting

    // Clear previous messages
    const errors = form.querySelectorAll(".error-message");
    errors.forEach(err => err.style.display = "none");

    let valid = true;

    // Name validation
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Please enter your full name");
      valid = false;
    }

    // Email validation
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email address");
      valid = false;
    }

    // Message validation
    const message = document.getElementById("message");
    if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters long");
      valid = false;
    }

    // Final feedback
    if (valid) {
      feedback.textContent = "✅ Thank you! Your message has been sent successfully.";
      feedback.className = "success";
      form.reset();
    } else {
      feedback.textContent = "⚠️ Please correct the highlighted errors.";
      feedback.className = "error";
    }
  });

  function showError(input, message) {
    const errorMessage = input.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    input.classList.add("error");

    input.addEventListener("input", () => {
      input.classList.remove("error");
      errorMessage.style.display = "none";
    });
  }
});

