import Button from './button';
import Lapel from './label';
import Input from './input';

export default class Div{

    criar = (props) =>{

        let div = document.createElement("div");

        if(props.id){
            div.setAttribute("id", props.id);
        }

        if(props.class){
            div.setAttribute("class", props.class);
        }

        if(props.position){
            div.style.position = props.position;
        }

        if(props.marginTop){
            div.style.marginTop = props.marginTop;
        }

        if(props.marginLeft){
            div.style.marginLeft = props.marginLeft;
        }

        return div;
    }

    criarDivComButton = ( props) =>{

        let div = this.criar({
            id:"div"+props.id,
            class: props.class,
            position: props.position,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft
        });

        let button = new Button().criar({
        id: "button"+props.id,
        text: props.text,
        onclick: props.onclick
        });

        div.append(button);

        return div;
    }


    criarDivComLabel = (props) =>{

        let div = this.criar({
            id: "div"=props.id,
            class: props.class,
            position: props.position,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft
        });

        let label = new Lapel().criar({
            id:props.id,
            text: props.text
        });

        div.append(label);

        return div;
    }

    criarDivComInput = (props) =>{


        let div = this.criar({

            id: props.id,
            class: props.class,
            position: props.position,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft
        });

        let label = new Label().criar({
            id: props.id,
            text: props.text
        });

        let input = new Input().criar({
            id: props.id,
            placeholder: props.placeholder,
            type: props.type
        });

        return div;
    }


}
