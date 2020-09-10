function criarAHref(props){
    
    let a = document.createElement("a");
    a.setAttribute("href", "#");

    
    if(props.onclick){
        a.setAttribute("onclick", props.onclick);
    }

    let text = criarTexNode({
        text: props.text
    });

    a.append(text);

    return a;
}