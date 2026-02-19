const setTheme = (themeName) => {
    localStorage.setItem("theme", themeName);

    document.documentElement.className = themeName;
};

const switcher = document.querySelector(".switch");

const toogleTheme = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
};

switcher.addEventListener("click", () => {
    toogleTheme();
});

(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
})();
