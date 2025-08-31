document.addEventListener('DOMContentLoaded', function() {
  // Login page password toggle
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    });
  }

  // Signup page password toggles
  const password1 = document.getElementById('password1');
  const togglePassword1 = document.getElementById('togglePassword1');
  if (togglePassword1 && password1) {
    togglePassword1.addEventListener('click', function() {
      const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
      password1.setAttribute('type', type);
    });
  }

  const password2 = document.getElementById('password2');
  const togglePassword2 = document.getElementById('togglePassword2');
  if (togglePassword2 && password2) {
    togglePassword2.addEventListener('click', function() {
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
    });
  }
});