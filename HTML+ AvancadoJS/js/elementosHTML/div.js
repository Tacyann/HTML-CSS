function criarDiv( props){

    let div = document.createElement("div");

    if(props.id){
        div.setAttribute("id", props.id);
    }

    if (props.class){
        div.setAttribute("class", props.class);
    }

    if(props.position){
        div.style.position = props.position;
    }

    if(props.marginTop){
        div.style.marginTop = props.marginTop;
    }

    if (props.marginLeft){
        div.style.marginLeft = props.marginLeft;
    }

    return div;
}

function criarDivComButton(props){

    //let div = criarDiv(props);

    let div = criarDiv({
        id: "div"+props.id, 
        class: props.class, 
        position: props.position,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft
    });

    let button = criarButton({
        id:"button"+props.id,
        text: props.text,
        onclick: props.onclick
    });

    div.append(button);

    return div;

}

function criarDivComLabel(props){

    let div = criarDiv({
        id: "div"+props.id, 
        class: props.class, 
        position: props.position,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft
    });

    let label = criarLabel({
        id:props.id,
        text:props.text
    });
    
    div.append(label);

    return div;
}

function criarDivComInput(props){

    let div = criarDiv({
        id:props.id,
        class: props.class,
        position:props.position,
        marginTop:props.marginTop,
        marginLeft: props.marginLeft 
});

    let label = criarLabel({
        id:props.id,
        text:props.text

     })

    let input = criarInput({
        id:props.id,
        placeholder:props.placeholder,
        type:props.type
     });

    div.append(label);
    div.append(input);

    return div;
}