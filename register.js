document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Te rugăm să introduci o adresă de email validă.');
        return;
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        alert('Te rugăm să introduci un număr de telefon valid.');
        return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Parola trebuie să aibă minim 8 caractere, o literă mare și cel puțin o cifră!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Parolele introduse nu coincid! Verifică din nou.');
        return;
    }

    if (localStorage.getItem(email)) {
        alert('Acest email este deja asociat unui cont existent!');
        return;
    }

    const userData = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userData));

    alert('Contul tău Mathoria a fost creat cu succes!');
    
    window.location.href = 'login.html';
});