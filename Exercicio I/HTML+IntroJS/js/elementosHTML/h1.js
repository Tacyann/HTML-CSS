function criarH1(props){

    let h1 = document.createElement("h1");

    if(props.text){
        let text = criarTextNode({ text: props.text});
    }
    
    h1.append(text);
    return h1;
}