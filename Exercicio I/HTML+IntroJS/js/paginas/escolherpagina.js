function escolherPagina(opcao) {

    indexedDB.innerHtml = "";

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