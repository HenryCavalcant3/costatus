var btnFav = document.querySelector("#fav");
var cidade = document.querySelector("#cidade");

const setFav = val => localStorage.setItem("fav", val);

const getFav = () => localStorage.getItem("fav");

const tradeColor = val => btnFav.style.color = (val == 0) ? (getDarkMode() == 0) ? "#1e272e" : "#ecf0f1" : "#f1c40f";

const startFav = () => {
    if(getFav() == 0 || getFav() != cidade.innerHTML) {
        tradeColor(0);
    }
    else {
        tradeColor(1);
    }
};

startFav();

const updateFav = () => {
    if(getFav() == 0 || getFav() != cidade.innerHTML) {
        setFav(cidade.innerHTML);
    }
    else {
        setFav(0);
    }
    
    startFav();
};

btnFav.addEventListener("click", () => updateFav());