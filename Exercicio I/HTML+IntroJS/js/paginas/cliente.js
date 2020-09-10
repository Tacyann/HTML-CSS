function cadastrarCliente(){

    let h1 = criarH1({
        text: "Cadastro de Cliente"
    });
    //div
    //label
    //input
    let nome = criarDivConInput({
        
        id:"Nome",
        class: " ",
        position:"absolute",
        marginTop:"10px",
        marginLeft: "10px", 
        text:"Nome: ",
        placeholder:"Tacyanne Pimenel",
        type:"text"
    });

    let cpf = criarDivConInput({

        id:"Cpf",
        class: " ",
        position:"absolute",
        marginTop:"10px",
        marginLeft: "150px", 
        text:"CPF: ",
        placeholder:"029.861.055-80",
        type:"text"
    });

    let dataNascimento = criarDivConInput({

        id:"DataNascimento",
        class: " ",
        position:"absolute",
        marginTop:"100px",
        marginLeft: "150px", 
        text:"Data de Nascimento: ",
        placeholder:"31/12/1988",
        type:"text"

    });



    

}