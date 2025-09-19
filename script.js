const form = document.getElementById("contactForm");
const container = document.getElementById("container");
const backBtn = document.getElementById("backBtn");

// Form validation + slide
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  // Slide transition to Thank You card
  container.classList.add("show-thankyou");
});

// Go back to form
backBtn.addEventListener("click", () => {
  container.classList.remove("show-thankyou");
  form.reset();
});




