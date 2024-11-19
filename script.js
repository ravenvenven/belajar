// Validasi form login
function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
  
    // Validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert('Email tidak valid');
      valid = false;
    }
  
    // Validasi password
    if (password.length < 6) {
      alert('Password harus terdiri dari minimal 6 karakter');
      valid = false;
    }
  
    return valid;
    

}