import TextNode from  './text_node';

class H1 {

    criar = (props) =>{

        let h1 = document.createElement("h1");

        if(props.text){

            var text = new TextNode().criar({

                text: props.text
            });
        }

        h1.append(text);

        return h1;
    }

}

export default H1;