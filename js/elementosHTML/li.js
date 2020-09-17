function criarLi( props){

    let li = document.createElement("li");

    let a = criarAHref({
        onclick: props.onclick,
        text: props.text
    });

    li.append(a);

    return li;
}