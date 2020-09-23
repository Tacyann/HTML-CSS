import H1 from '../elementosHTML/h1';

export default class Home {

    carregar = () =>{

        let h1 = new H1().criar({
            text:"Home"
        });

        index.append(h1);
    }

}