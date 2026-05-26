document.addEventListener("DOMContentLoaded", () => {

    const auth = document.querySelector(".auth");
    if (!auth) return;

    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        auth.innerHTML = `<a href="#" onclick="logout()">Logout</a>`;
    } else {
        auth.innerHTML = `<a href="login.html">Login</a>`;
    }
});