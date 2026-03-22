function nextPage() {
    const paras = document.getElementsByClassName('text');

    while(paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
    }
}