function init() {

    let index = document.getElementById("index");
    index.style.position = "absolute";
    index.style.top = "10px";
    index.style.left = "10px";
    index.style.width = "800px";
    index.style.height = "300 px";
    index.style.border = "1px solid";
    index.style.borderColor = "DCDCDC"
}

init();

function carregarPagina() {
    criarMenu();
}

carregarPagina();