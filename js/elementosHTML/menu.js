function criarMenu(){

    let ul = criarUl({
        itens: [
            {text: "Home", onclick:"escolherPagina('home')"},
            {text: "Cadastrar Cliente", onclick:"escolherPagina('cadastrar-cliente')"},
            {text: "Listar Medico", onclick:"escolherPagina('home')"}
        ]
    })

    index.append(ul);
}
