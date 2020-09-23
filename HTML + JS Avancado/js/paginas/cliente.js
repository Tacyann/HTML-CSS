import H1 from '../elementosHTML/h1';
import Div from '../elementosHTML/div';

export default class Cliente
{

    carregarCadastro = () =>
    {

        let index = document.getElementById("index");

        let h1 = new H1().criar({
            text: "Cadastro de Cliente"
        });

        let nome = new Div().criarDivComInput({
            id:"Nome",
            class: "",
            position: "absolute",
            marginTop:"10px",
            text:"Nome :",
            placeholder:"Digite o Nome",
            type: text
        });

        let cpf = new Div().criarDivComInput({
            id:"Cpf",
            class: "",
            position: "absolute",
            marginTop:"10px",
            marginLeft:"250px",
            text:"CPF :",
            placeholder:"000.000.000-00",
            type: text
        });

        let dataNascimento = new Div().criarDivComInput({
            id:"DataNascimento",
            class: "",
            position: "absolute",
            marginTop:"10px",
            marginLeft:"250px",
            text:"Data de Nascimento :",
            placeholder:"00/00/0000",
            type: text
        });

        index.append(nome);
        index.append(cpf);
        index.append(dataNascimento);

        let buttonSalvar = new Div().criarDivComButton({
            id:"Salvar",
            class:"",
            position:"absolute",
            marginTop:"200px",
            marginLeft:"10px",
            text: "Salvar",
            onclick:"salvarCliente()"
        });

        let buttonClienteNoConsole = new Div().criarDivComButton({
            id:"ClienteNoConsole",
            class:"",
            position:"absolute",
            marginTop:"200px",
            marginLeft:"70px",
            text: "Cliente No Console",
            onclick:"imprimirClienteNoConsole()"
        });


        let buttonClienteNoHTML = new Div().criarDivComButton({
            id:"ClienteNoHTML",
            class:"",
            position:"absolute",
            marginTop:"200px",
            marginLeft:"210px",
            text: "Cliente No HTML",
            onclick:"imprimirClienteNoHTML()"
        });

        index.append(buttonSalvar);
        index.append(buttonClienteNoConsole);
        index.append(buttonClienteNoHTML);


        }
    }
