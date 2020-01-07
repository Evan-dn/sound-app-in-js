

window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "lightpink",
        "orange",
        "purple",
        "red",
        "blue",
        "lightblue"
    ];

    // code pour la musique
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            // currentTime pour jouer la musique plusieurs fois
            sounds[index].play();
            // on appelle la fonction createBubble avec en paramètre l'index du pad
            createBubbles(index);
        });
    });

    // code fonction createBubble
    const createBubbles = (index) =>  {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };

});


