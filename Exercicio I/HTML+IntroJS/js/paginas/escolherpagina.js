function escolherPagina(opcao){
    
    indexedDB.innerHtml = "";
    
    criarMenu();
    switch(opcao){
        case "cliente":
            cadastrarCliente();
            break;
        case "home":
            carregarHome();
            break;
    }
}