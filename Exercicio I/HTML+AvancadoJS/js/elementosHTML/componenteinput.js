/*
function criarDivParaInput(nomeLabel, top, left, size) {

    let dom = document;
    let div = dom.createElement("div");
    div.setAttribute("id", "div"+nomeLabel);
    div.style.position = "absolute";
    div.style.marginTop = top;
    div.style.marginLeft = left;


    let label = dom.createElement("label");
    label.setAttribute("id", "label"+nomeLabel);
    //let label = dom.getElementById("nomeLabel").textContent;

    let texto = dom.createTextNode(nomeLabel);

    label.append(texto);

    let input = dom.createElement("input");
    input.setAttribute("id", "input"+nomeLabel);
    input.size = size;

    div.append(label);
    div.append(input);

    let body = dom.getElementById("divBody");

    body.append(div);

}
*/