import Menu from './paginas/menu';
import Cliente from './paginas/cliente';
import Home from './paginas/home';
import Medico from './paginas/listar-medicos';

export default class Controller{

    constructor(){

        index.innerHTML = "";
        new Menu().criar();
        let rota = this.pegarRota();
        this.direcionar(rota);
    }

    pegarRota = () =>{

        let array = window.location.href.split("/");

        let url =  array[array.length - 1].split("#");

        let rosa = url[uri.length - 1];

        return rota;
    }

    direcionar = (opcao) =>{

        switch(opcao){

            case "":
            case "index":
            case "home":
                new Home().carregar();
                break;
            case "Cadastrar-Cliente":
                new Cliente().carregarCadastro();
                break;
            case "listar-medicos":
                new Medico().listar();
                break;
        }
    }
}