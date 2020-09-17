function imprimirClientesNoConsole() {
    console.log(clientes);
}

function imprimirClientesNoHTML() {
    let top = 250;
    let i = 1;
    clientes.forEach(cliente => {

        criarDivParaLabel("label"+i, top+"px", cliente);

        i++;
        top += 40;

    });
}