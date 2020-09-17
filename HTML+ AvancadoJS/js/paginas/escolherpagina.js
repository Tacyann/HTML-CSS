function escolherPagina(opcao) {

    index.innerHTML = "";

    criarMenu();
    
    switch (opcao) {
        case "cadastrar-cliente":
            cadastrarCliente();
            break;
        case "home":
            carregarHome();
            break;
    }
}