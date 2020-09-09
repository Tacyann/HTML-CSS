function formatarDivBody() {
    let body = document.getElementById("divBody");
    body.style.position = "absolute";
    body.style.top = "10px";
    body.style.left = "10px";
    body.style.width = "800px";
    body.style.height = "400px";
    body.style.border = " 1px solid";
    body.style.borderColor = "#DCDCDC";

}

formatarDivBody();

function criarComponentes() {

    criarDivParaInput("Nome", "10px", "10px");
    criarDivParaInput("CPF", "10px", "250px");
    criarDivParaInput("DataNascimento", "50px", "10px");

    criarDivParaButton("Salvar", "200px", "10px", "salvarCliente");
    criarDivParaButton("Cliente no Console", "200px", "100px", "imprimirClientesNoConsole");
    criarDivParaButton("Cliente no HTML", "200px", "250px", "imprimirClientesNoHTML");
}

criarComponentes();