document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitBtn = document.getElementById('submitBtn');

  // Validate Name field (must not be empty)
  function validateName() {
    return nameInput.value.trim() === '';
  }

  // Validate Email field (must match a valid email format)
  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !emailPattern.test(emailInput.value);
  }

  // Validate Password field (must be at least 6 characters long)
  function validatePassword() {
    return passwordInput.value.length < 6;
  }

  // Enable/disable submit button based on input validation
  function toggleSubmitButton() {
    const isNameInvalid = validateName();
    const isEmailInvalid = validateEmail();
    const isPasswordInvalid = validatePassword();
    submitBtn.disabled = isNameInvalid || isEmailInvalid || isPasswordInvalid;
  }

  // Handle input events for live validation
  nameInput.addEventListener('input', toggleSubmitButton);
  emailInput.addEventListener('input', toggleSubmitButton);
  passwordInput.addEventListener('input', toggleSubmitButton);

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the form from submitting

    const nameError = validateName();
    const emailError = validateEmail();
    const passwordError = validatePassword();

    let errorMessage = '';
    if (nameError) errorMessage += 'Name cannot be empty\n';
    if (emailError) errorMessage += 'Please enter a valid email address\n';
    if (passwordError) errorMessage += 'Password must be at least 6 characters long\n';

    if (errorMessage) {
      alert(errorMessage);
    } else {
      alert('Form submitted successfully!');
      form.reset();
      toggleSubmitButton(); // Re-evaluate button state
    }
  });
});


