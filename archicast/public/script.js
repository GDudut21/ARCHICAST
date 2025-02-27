document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".container");
    const homeSection = document.querySelector(".home");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    sections.forEach(section => section.classList.remove("active"));
    homeSection.classList.add("active");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            if (targetId === "home") {
                homeSection.style.display = "block";
                homeSection.classList.add("active");
                sections.forEach(section => section.classList.remove("active"));
            } else {
                homeSection.style.display = "none";
                homeSection.classList.remove("active");
                sections.forEach(section => {
                    section.classList.toggle("active", section.id === targetId);
                });
            }

            navMenu.classList.remove("active"); // Close menu on selection
        });
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
