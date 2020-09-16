function criarDivParaButton(nomeButton, top, left, onClick) {

    let div = document.createElement("div");
    div.setAttribute("id", "div" + nomeButton);
    div.style.position = "absolute";
    div.style.marginTop = top;
    div.style.marginLeft = left;

    let button = document.createElement("button");
    button.setAttribute("id", "button" + nomeButton);
    let texto = document.createTextNode(nomeButton);
    button.setAttribute("onClick", onClick + "()");

    button.append(texto);

    div.append(button);

    let body = document.getElementById("divBody");
    body.append(div);
} 