function formatarDivBody() {
    let body = document.getElementById("divBody");
    body.style.position = "absolute";
    body.style.top = "10px";
    body.style.left = "10px";
    body.style.width = "1450px";
    body.style.height = "400px";
    body.style.border = " 1px solid";
    body.style.borderColor = "#DCDCDC";

}

formatarDivBody();

function criarComponentes() {

    criarDivParaInput("Nome", "10px", "10px");
    criarDivParaInput("CPF", "10px", "380px");
    criarDivParaInput("Data de Nascimento", "10px", "680px");
    criarDivParaInput("Endereco", "50px", "10px");
    criarDivParaInput("Bairro", "50px", "250px");
    criarDivParaInput("CEP", "50px", "480px");
    criarDivParaInput("Data de Cadastro", "50px", "700px");
    criarDivParaInput("Municipio", "85px", "10px");
    criarDivParaInput("Telefone", "85px", "270px");
    criarDivParaInput("Celular", "85px", "520px");
    criarDivParaInput("UF", "85px", "750px");
    criarDivParaInput("Inscricao Estadual", "85px", "950px");
    criarDivParaInput("UF", "85px", "1250px");

    criarDivParaButton("Salvar", "200px", "10px", "salvarCliente");
    criarDivParaButton("Cliente no Console", "200px", "100px", "imprimirClientesNoConsole");
    criarDivParaButton("Cliente no HTML", "200px", "250px", "imprimirClientesNoHTML");
}

criarComponentes();