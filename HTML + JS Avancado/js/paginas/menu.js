import Ul from '../elementosHTML/ul';

export default class Menu{

    criar = () =>{

        let ul = new Ul().criar({

            itens:[
                { text: "Home", href: "#"},
                { text: "Cadastrar Cliente", href: "#cadastrar-cliente"},
                { text: "Listar Medico", href: "#listar-medico"},
            ]
        })

        index.append(ul);
    }
}