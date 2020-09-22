import Li from "./li.js"
export default class Ul
{

    criar = (props) =>
{
    let ul = document.createElement("ul");

    props.itens.forEach(item => {

        let li = new Li().criar({
            text: item.text,
            href: item.href,
            onclivk: item.onclick
        })

        ul.append(li);
    });
    return ul;

}

}
