function criarMenu(){

    let ul = criarUl({
        itens: [
            {text: "Home", onclick:"CarregarHome"},
            {text: "Cadastrar Cliente", onclick:"escolherPagina('cadastrar-cliente)"},
        ]
    })

    index.append(ul);
}
