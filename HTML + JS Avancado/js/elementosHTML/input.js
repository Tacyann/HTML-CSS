export default class Input{


    criar = (props) =>{

        let input = document.createElement("input");

        if(props.id){
            input.setAttribute("id", props.id);
        }

        if(props.placeholder){
            input.placeholder = props.placeholder;
        }

        if(props.type){
            imput.type = props.type;
        }

        return input;
    }
}