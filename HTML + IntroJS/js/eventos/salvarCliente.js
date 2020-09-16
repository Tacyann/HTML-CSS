var clientes = [];

function salvarCliente() {

    let cliente = {
        nome: document.getElementById("inputNome").value,
        cpf: document.getElementById("inputCpf").value,
        dataNascimento: document.getElementById("inputDataNascimrnto").value
    }

    clientes.push(cliente);
} 