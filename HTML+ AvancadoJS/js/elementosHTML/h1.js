function criarH1(props){

    let h1 = document.createElement("h1");

    if(props.text){
        var text = criarTextNode({ text: props.text});
    }
    
    h1.append(text);
    return h1;
}