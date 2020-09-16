function criarLabel(props){

    let label = document.createElement("label");

    if(props.id){
       label.setAttribute("id", props.id); 
    }

    let text = criarTextNode({text: props.text});

    label.append(text);

    return label;

}