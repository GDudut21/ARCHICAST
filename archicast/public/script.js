document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".container, .home");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");
    const logoLinks = document.querySelectorAll(".logo-link");
    const homeSection = document.getElementById("home");

    function removeActiveNav() {
        navLinks.forEach(link => link.classList.remove("active-link"));
    }

    function hideAllSections() {
        sections.forEach(section => section.style.display = "none");
    }

    function navigateToSection(targetId) {
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            hideAllSections();
            targetSection.style.display = "block"; // Show the selected section
            removeActiveNav();
            
            const activeNavLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add("active-link");
            }

            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

            // Update URL without reloading
            history.pushState(null, null, `#${targetId}`);
        }
    }

    // Click event for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            navigateToSection(targetId);

            if (navMenu) navMenu.classList.remove("active"); // Close mobile menu
        });
    });

    // Make the logo go back to home and update URL to /#home
    logoLinks.forEach(logo => {
        logo.addEventListener("click", function (e) {
            e.preventDefault();
            navigateToSection("home");
        });
    });

    // Highlight the correct nav link when scrolling
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                removeActiveNav();
                const activeNavLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
                if (activeNavLink) {
                    activeNavLink.classList.add("active-link");
                }

                // Update the URL while scrolling
                history.replaceState(null, null, `#${section.id}`);
            }
        });
    });

    // Ensure the correct section is shown if the user loads the page with a hash (e.g., /#about)
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        navigateToSection(targetId);
    }

    // Mobile menu toggle fix
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});
