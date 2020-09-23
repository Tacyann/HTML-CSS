import TextNode from './text_node';

export default class Button{

    criar = (props) => {

        //id.text
        let button = document.createElement("button");

        if(props.id){

            button.setAttribute("id", props.id);
        }

        if(props.onclick){
            button.setAttribute("onclick", props.onclick);
        }

        let text = new TextNode().criar({
            text: props.text
        });

        button.append(text);

        return button;

    }
}