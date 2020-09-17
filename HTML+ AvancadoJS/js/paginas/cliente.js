var index = document.getElementById("index");

function cadastrarCliente() {

    let h1 = criarH1({
        text: "Cadastro de Cliente"
    });
    //div
    //label
    //input
    let nome = criarDivConInput({

        id: "Nome",
        class: " ",
        position: "absolute",
        marginTop: "10px",
        marginLeft: "10px",
        text: "Nome: ",
        placeholder: "Nome",
        type: "text"
    });

    let cpf = criarDivConInput({

        id: "Cpf",
        class: " ",
        position: "absolute",
        marginTop: "10px",
        marginLeft: "150px",
        text: "CPF: ",
        placeholder: "000.000.000-00",
        type: "text"
    });

    let dataNascimento = criarDivConInput({

        id: "DataNascimento",
        class: " ",
        position: "absolute",
        marginTop: "100px",
        marginLeft: "150px",
        text: "Data de Nascimento: ",
        placeholder: "dd/mm/AAAA",
        type: "text"

    });

    index.append(nome);
    index.append(cpf);
    index.append(dataNascimento);

    let buttonSalvar = criarDivConInput({
        id: "Salvar",
        class: " ",
        position: "absolute",
        marginTop: "200px",
        marginLeft: "10px",
        text: "Salvar: ",
        onclick: "salvarCliente()"
    });

    let buttonClienteNoConsole = criarDivConInput({
        id: "ClienteNoConsole",
        class: " ",
        position: "absolute",
        marginTop: "200px",
        marginLeft: "70px",
        text: "Cliente No Console: ",
        onclick: "imprimirClienteNoConsole()"
    });

    let buttonClienteNoHTML = criarDivConInput({
        id: "ClienteNoHTML",
        class: " ",
        position: "absolute",
        marginTop: "200px",
        marginLeft: "21px",
        text: "Cliente No HTML: ",
        onclick: "imprimirClienteNoHTML()"
    });

    index.append(buttonSalvar);
    index.append(buttonClienteNoConsole);
    index.append(buttonClienteNoHTML);


}