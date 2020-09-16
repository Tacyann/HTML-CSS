function criarButton(props) {

    let button = document.createElement("button");

    if (props.id) {
        button.id = props.id;
    }

    if (props.onclick) {
        button.setAttribute("onclick", props.onclick);
    }

    let text = criarTextNode({ text: props.text });

    button.append(text);
    return button;
}