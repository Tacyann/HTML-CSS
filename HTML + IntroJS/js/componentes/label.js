function criarDivParaLabel(nomeLabel, top, left, cliente) {

    let div = document.createElement("div");
    div.setAttribute("id", "div" + nomeLabel);
    div.style.position = "absolute";
    div.style.marginTop = top;
    div.style.marginLeft = left;

    let label = document.createElement("label");
    label.setAttribute("id", nomeLabel);

    let texto = document.createElement("label");
    label.setAttribute("id".nomeLabel);

    let texto = document.createTextNode(cliente.nome);

    label.append(texto);

    div.append(label);

    let body = document.getElementById("divBody");

    body.append(div);

} 