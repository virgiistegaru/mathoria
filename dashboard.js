
function openPDF(path, lessonTitle) {

    let recentLessons = JSON.parse(localStorage.getItem("recentLessons")) || [];

    recentLessons = recentLessons.filter(title => title !== lessonTitle);

    recentLessons.unshift(lessonTitle);

    localStorage.setItem("recentLessons", JSON.stringify(recentLessons));

    sortLessons();

    window.open(path, "_blank");
}

function sortLessons() {

    const container = document.querySelector(".lesson-cards");
    if (!container) return;

    const cards = Array.from(document.querySelectorAll(".lesson-card"));

    const recentLessons = JSON.parse(localStorage.getItem("recentLessons")) || [];

    cards.sort((a, b) => {

        const aIndex = recentLessons.indexOf(a.dataset.title);
        const bIndex = recentLessons.indexOf(b.dataset.title);

        const safeA = aIndex === -1 ? 999 : aIndex;
        const safeB = bIndex === -1 ? 999 : bIndex;

        return safeA - safeB;
    });

    container.innerHTML = "";

    cards.forEach(card => {
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const email = sessionStorage.getItem("currentUser");
    const user = JSON.parse(localStorage.getItem(email));

    const welcome = document.getElementById("welcomeText");

    if (welcome && user) {
        const hour = new Date().getHours();

        const greeting =
            hour < 12 ? "Good morning" :
            hour < 18 ? "Good afternoon" :
            "Good evening";

        welcome.textContent = `👋 ${greeting}, ${user.name || email}!`;
    }

    sortLessons();
});
