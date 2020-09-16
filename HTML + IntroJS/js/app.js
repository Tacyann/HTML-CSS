function formatarDivBody() {
    let body = document.getElementById("divBody");
    body.style.position = "absolute";
    body.style.top = "10px";
    body.style.left = "10px";
    body.style.width = "1480px";
    body.style.height = "200px";
    body.style.border = " 1px solid";
    body.style.borderColor = "#DCDCDC";

}

formatarDivBody();

function criarComponentes() {

    criarDivParaInput("Nome ", "10px", "10px",100);
    criarDivParaInput("CPF ", "10px", "840px",40);
    criarDivParaInput("Data Nascimento ", "10px", "1205px",15);
    criarDivParaInput("Endereco ", "50px", "10px",58);
    criarDivParaInput("Bairro ", "50px", "550px",43);
    criarDivParaInput("CEP ", "50px", "950px",24);
    criarDivParaInput("Data de Cadastro ", "50px", "1205px",15);
    criarDivParaInput("Municipio ", "90px", "10px",20);
    criarDivParaInput("Telefone ", "90px", "280px",20);
    criarDivParaInput("Celular ", "90px", "550px",20);
    criarDivParaInput("UF ", "90px", "800px",10);
    criarDivParaInput("Insc.Estadual ", "90px", "950px",16);
    criarDivParaInput("UF ", "90px", "1200px",29);


    criarDivParaButton("Salvar", "150px", "10px", "salvarCliente");
    criarDivParaButton("Cliente no Console", "150px", "80px", "imprimirClienteNoConsole");
    criarDivParaButton("Cliente no HTML", "150px", "230px", "imprimirClienteNoHtml");
}

criarComponentes(); 