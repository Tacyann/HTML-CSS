function criarUl(props){

    let ul = document.createElement("ul");

    props.itens.forEach( item =>{
        let li = criarLi({
            text:item.text,
            onclick: iten.onclick
        })
        ul.append(li);
    })
return ul;

}