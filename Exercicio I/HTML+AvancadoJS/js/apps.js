function formatarDivBody() {
    let body = document.getElementById("divBody");
    body.style.position = "absolute";
    body.style.top = "10px";
    body.style.left = "10px";
    body.style.width = "1160px";
    body.style.height = "300px";
    body.style.border = " 1px solid";
    body.style.borderColor = "#DCDCDC";

}

formatarDivBody();

function criarComponentes() {

    criarDivParaInput("Nome", "10px", "10px", 65);
    criarDivParaInput("CPF", "10px", "540px",34);
    criarDivParaInput("Data de Nascimento", "10px", "850px",20);
    criarDivParaInput("Endereco", "50px", "10px", 44);
    criarDivParaInput("Bairro", "50px", "420px",25);
    criarDivParaInput("CEP", "50px", "672px", 15);
    criarDivParaInput("Data de Cadastro", "50px", "850px", 23);
    criarDivParaInput("Municipio", "85px", "10px", 15);
    criarDivParaInput("Telefone", "85px", "222px",14);
    criarDivParaInput("Celular", "85px", "420px",10);
    criarDivParaInput("UF", "85px", "580px",5);
    criarDivParaInput("Insc.Estadual", "85px", "670px",7);
    criarDivParaInput("UF", "85px", "850px",36);

    criarDivParaButton("Salvar", "200px", "10px", "salvarCliente");
    criarDivParaButton("Cliente no Console", "200px", "100px", "imprimirClientesNoConsole");
    criarDivParaButton("Cliente no HTML", "200px", "250px", "imprimirClientesNoHTML");
}

criarComponentes();