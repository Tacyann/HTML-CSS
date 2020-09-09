function imprimirClienteConsole() {
    console.log(clientes);
}

function imprimirClientesNoHtml() {
    let top = 250;
    let i = 1;
    clientes.forEach(cliente => {

        i++;
        top += 40;

    });
}