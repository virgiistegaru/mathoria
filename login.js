document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("loginEmail").value;
        const passwordInput = document.getElementById("loginPassword").value;

        const savedUser = localStorage.getItem(emailInput);

        if (savedUser) {
            const user = JSON.parse(savedUser);

            if (user.password === passwordInput) {

                sessionStorage.setItem("isLoggedIn", "true");
                sessionStorage.setItem("currentUser", emailInput);

                window.location.href = "dashboard.html";

            } else {
                alert("Parola este incorectă!");
            }

        } else {
            alert("Acest email nu este înregistrat!");
        }
    });

});