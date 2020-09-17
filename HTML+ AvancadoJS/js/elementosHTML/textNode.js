function criarTextNode( props){

    if(props.text){
        var text =  document.createTextNode( props.text);
    }
        return text;
    
}