/* ===== Theme Switcher ===== */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});


/* ===== Language Switcher ===== */

const languageButton = document.getElementById("languageButton");

let currentLanguage = "en";

languageButton.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    document.documentElement.lang = currentLanguage;

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
        languageButton.textContent = "English";
    } else {
        document.documentElement.dir = "ltr";
        languageButton.textContent = "العربية";
    }

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(function (element) {
        element.textContent = element.getAttribute(
            "data-" + currentLanguage
        );
    });
});


/* ===== Contact Form ===== */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (currentLanguage === "ar") {
        formStatus.textContent =
            "تم التحقق من النموذج محليًا. الإرسال الفعلي غير مفعّل.";
    } else {
        formStatus.textContent =
            "The form was checked locally. Actual message delivery is not configured.";
    }

    contactForm.reset();
});