import Div from '../elementosHTML/div';

export default class Medico {

    async listar(){

        //promise -- async!!!
        const medicos = await fetch('https://web-unit-herokuapp.com/medico').then(response =>{
            return response.json();
        })
        .catch (error =>
            console.log(error));

            //console.log("Medicos (array): "medicos);

        medicos.array.forEach(medico => {
            console.log(medico);
        });

        let index = document.getElementById("index");

        let div = new Div().criarDivComLabel({
            id: "medicos",
            position: "absolute",
            marginTop:"200px",
            marginLeft: "10px",
            text: medicos
        });

        index.append(div);
    }
}