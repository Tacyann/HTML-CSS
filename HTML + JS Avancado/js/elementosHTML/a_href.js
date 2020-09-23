import TextNode from './text_node';

export default class AHref{

    criar = (props) => {
    let a = document.createElement("a");

    if(props.href){
        a.setAttribute("href", props.href);
    }

    if(props.onclick){
    a.setAttribute("onclick", props.onclick);
    }

    let text = new TextNode().criar({
        text:props.text
    });

    a.append(text);

    return a;

    }
}