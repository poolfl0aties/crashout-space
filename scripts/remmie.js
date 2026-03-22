function nextPage() {
    const paras = document.getElementsByClassName('text');
    const pokeball = document.getElementById('pokeball');

    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
    pokeball.style.top = "75px";
    pokeball.style.animation = "moveOver";
}