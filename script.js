// ==========================================
// NAVIGATION MOBILE
// ==========================================

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

let mobileMenu = null;

menuButton.addEventListener("click", () => {

    if (!mobileMenu) {

        mobileMenu = document.createElement("div");

        mobileMenu.className = "mobile-menu";

        mobileMenu.innerHTML = `
            <a href="#about">À propos</a>
            <a href="#experience">Parcours</a>
            <a href="#projects">Projets</a>
            <a href="#skills">Compétences</a>
            <a href="#contact">Contact</a>
        `;

        document.body.appendChild(mobileMenu);

        const style = document.createElement("style");

        style.textContent = `
            .mobile-menu {
                position: fixed;
                top: 90px;
                left: 20px;
                right: 20px;
                z-index: 100;

                background: rgba(16,18,22,0.97);
                backdrop-filter: blur(20px);

                border: 1px solid rgba(255,255,255,0.08);

                display: flex;
                flex-direction: column;

                padding: 20px;

                transform: translateY(-20px);
                opacity: 0;

                transition: 0.3s ease;
            }

            .mobile-menu.open {
                transform: translateY(0);
                opacity: 1;
            }

            .mobile-menu a {
                padding: 17px 5px;
                border-bottom: 1px solid rgba(255,255,255,0.07);
                color: #9699a1;
                font-size: 13px;
            }

            .mobile-menu a:last-child {
                border-bottom: none;
            }

            .mobile-menu a:hover {
                color: #f4f4f1;
            }
        `;

        document.head.appendChild(style);

        setTimeout(() => {
            mobileMenu.classList.add("open");
        }, 10);

    } else {

        mobileMenu.classList.toggle("open");

    }
});


// ==========================================
// FERMER LE MENU APRÈS UN CLIC
// ==========================================

document.addEventListener("click", (event) => {

    if (
        mobileMenu &&
        mobileMenu.classList.contains("open") &&
        event.target.tagName === "A"
    ) {
        mobileMenu.classList.remove("open");
    }

});


// ==========================================
// ANIMATION AU SCROLL
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// ==========================================
// EFFET LÉGER SUR LA PHOTO
// ==========================================

const photoFrame = document.querySelector(".photo-frame");

if (photoFrame) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 100;
        const y = (window.innerHeight / 2 - event.clientY) / 100;

        photoFrame.style.transform =
            `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;

    });

}


// ==========================================
// ANNÉE AUTOMATIQUE DU FOOTER
// ==========================================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} Nael Yala. Tous droits réservés.`;

}