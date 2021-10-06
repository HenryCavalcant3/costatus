const virus = document.querySelector("#virus");

var click = 0;
var animation = "virus 5s infinite linear";

var numb = 1;

const insertVirus = val => {
    var virusElem = document.createElement("span");
    var virusTex = document.createElement("i");
    
    virusElem.classList.add("virus");

    virusTex.classList.add("fas");
    virusTex.classList.add("fa-virus");

    virusElem.appendChild(virusTex);
    virusElem.style.top = ""+Math.floor(Math.random()*101)+"%";
    virusElem.style.left = ""+Math.floor(Math.random()*101)+"%";
    
    (val === 0) ? virusElem.style.animation = animation : virusElem.style.animation = animation + " reverse";

    virus.appendChild(virusElem);
}

const startAnimation = () => {
    setInterval(() => {
        numb *= 2;
    
        if(numb < 50) {
            for(var i=0; i<numb; i++) {
                insertVirus((i%2 == 0) ? 0 : 1);
            }
        }
    }, 1500);
};

const addClick = () => {
    click ++;

    if(click === 10) {
        startAnimation();
    }
};

virus.addEventListener("click", () => addClick());