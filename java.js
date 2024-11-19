// Validasi form pendaftaran
function validateRegisterForm() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('conf_password').value;
    let valid = true;
  
    // Validasi nama lengkap
    if (fullname.trim() === '') {
      alert('Nama lengkap tidak boleh kosong');
      valid = false;
    }
  
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
  
    // Validasi konfirmasi password
    if (password !== confPassword) {
      alert('Password dan konfirmasi password tidak cocok');
      valid = false;
    }
  
    return valid;
  }
  
  // Menambahkan event listener untuk form login dan register
  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form[action="#"]');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Menghentikan submit form default
        if (validateLoginForm()) {
          alert('Login berhasil!');
          // Kirim form atau arahkan pengguna ke halaman lain
        }
      });
    }
  
    const registerForm = document.querySelector('form[action="#"]');
    if (registerForm) {
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Menghentikan submit form default
        if (validateRegisterForm()) {
          alert('Pendaftaran berhasil!');
          // Kirim form atau arahkan pengguna ke halaman lain
        }
      });
    }
  });