var btnDarkMode = document.querySelector("#dark");
var darkBox = document.querySelector("#dBox");

const setDarkMode = val => localStorage.setItem("darkMode", val);

const getDarkMode = () => localStorage.getItem("darkMode");

const updateDarkMode = () => {
    setDarkMode((getDarkMode() == 0) ? 1 : 0);
    btnDarkMode.checked = (getDarkMode() == 1);
}

const startDarkMode = () => {
    btnDarkMode.checked = (getDarkMode() == 1);
}

startDarkMode();

darkBox.addEventListener("click", () => updateDarkMode());