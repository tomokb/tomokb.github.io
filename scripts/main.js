
// Theme/mode
const theme = "light-theme";

const modeButton = document.querySelector("#theme-toggle");
modeButton.addEventListener("click", function() {
    if (theme === "light-theme") {
        document.body.classList.toggle("dark-theme");
    }
    if (theme === "dark-theme") {
        document.body.classList.toggle("light-theme");
    }
});

// Year
const year = document.querySelector('#year'); 
const currentDate = new Date();
const currentYear = document.createTextNode(currentDate.getFullYear());
year.appendChild(currentYear);