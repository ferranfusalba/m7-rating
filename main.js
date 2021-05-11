var stars = document.querySelectorAll('.star');
var background = document.querySelector(".background");
var index;

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function() {
        removeAdd1();
        removeAdd2(i);
    })
    stars[i].addEventListener('click', function() {
        index = i;
    })
    background.addEventListener('click', function() {
        index = undefined;
        removeAdd1();
    })
    stars[i].addEventListener('mouseout', function() {
        removeAdd1();
        removeAdd2(index);
    })
}

function removeAdd1() {
    for (let x = 0; x < stars.length; x++) {
        stars[x].classList.remove("starGold");
        stars[x].classList.add("star");
    }
}

function removeAdd2(indice) {
    for (let x = 0; x <= indice; x++) {
        stars[x].classList.remove("star");
        stars[x].classList.add("starGold");
    }
}