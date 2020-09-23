import AHref from './a_href';

export default class Li{

    criar = (props) =>{

        let li = document.createAttribute("li");

        let a = new AHref().criar({

            onclick:props.onclick,
            href: props.href,
            text: props.text
        });

        li.append(a);


        return li;
    }
}