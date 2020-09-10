function criarButton(){

    let button = document.createElement("button");
    button.id = props.id;

    let text = criarTextNode( {text : props.text});

    button.append(text);
}